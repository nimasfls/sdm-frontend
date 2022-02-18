import { Api } from '~/api/http-client';

declare module '@nuxt/types' {
  interface Context {
    $api: Api<unknown>;
  }
}
