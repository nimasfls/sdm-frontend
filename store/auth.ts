import { GetterTree, ActionTree, MutationTree } from 'vuex';
import { LoginRequestDto } from '~/api/http-client';

export const state = () => ({
  user: { id: null } as { id: number | null },
});

export type AuthStoreType = ReturnType<typeof state>;

export const getters: GetterTree<AuthStoreType, AuthStoreType> = {
  user: (state) => state.user,
};

export const mutations: MutationTree<AuthStoreType> = {
  setUser: (state, payload: { id: number | null }) => {
    state.user = payload;
  },
};

export const actions: ActionTree<AuthStoreType, AuthStoreType> = {
  async login({ commit }, dto: LoginRequestDto) {
    const { data } = await this.$api.auth.authControllerLogin(dto);
    commit('setUser', data);
  },
  async logout() {
    await this.$api.auth.authControllerLogout();
    this?.$router?.push('/login');
  },
};
