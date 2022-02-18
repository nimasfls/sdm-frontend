import { AxiosRequestConfig } from 'axios';
import { Context } from '@nuxt/types';
import { Inject } from '@nuxt/types/app';
import { Api } from '~/api/http-client';
import { loopRequestHeader } from '~/common/constants';

export default function (context: Context, inject: Inject) {
  const api = new Api({
    baseURL: process.env.baseUrl || '/',
    withCredentials: true,
  });

  api.instance.interceptors.request.use(
    (config) => {
      config.timeout = 10000;
      return config;
    },
    (error) => {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  );

  api.instance.interceptors.response.use(
    (value) => {
      return value;
    },
    async (err: any) => {
      const error: {
        config: AxiosRequestConfig;
        message: string;
        name: string;
        stack: string;
        status: number;
      } = JSON.parse(JSON.stringify(err));
      if (error) {
        switch (error.status) {
          case 401:
            if (!error?.config?.headers?.[loopRequestHeader]) {
              await api.auth.authControllerRefresh();
              await api.request({
                path: error.config.url?.toString() || '',
                headers: {
                  ...error.config.headers,
                  [loopRequestHeader]: true,
                },
                baseURL: error.config.baseURL,
                withCredentials: true,
                body: error.config?.data,
                method: error.config.method,
              });
            } else {
              context?.app?.store?.dispatch('auth/logout');
            }
            break;
          case 403:
            context?.app?.store?.dispatch('auth/logout');
        }
      }
    }
  );
  inject('api', api);
  context.$api = api;
}
