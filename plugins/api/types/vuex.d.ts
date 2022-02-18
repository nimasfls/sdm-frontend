import { Api } from '~/api/http-client';

declare module 'vuex/types/index' {
  interface Store<S> {
    $api: Api<unknown>;
  }
}
