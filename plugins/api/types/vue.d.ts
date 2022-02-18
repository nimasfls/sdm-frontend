import { Api } from '~/api/http-client';

declare module 'vue/types/vue' {
  interface Vue {
    $api: Api<unknown>;
  }
}
