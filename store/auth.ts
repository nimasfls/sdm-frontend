import { GetterTree, ActionTree, MutationTree } from 'vuex';
import { LoginRequestDto } from '~/api/http-client';

export const state = () => ({
  user: null as { id: number } | null,
  isLoggedIn: false,
});

export type AuthStoreType = ReturnType<typeof state>;

export const getters: GetterTree<AuthStoreType, AuthStoreType> = {
  user: (state) => state.user,
  isLoggedIn: (state) => state.isLoggedIn,
};

export const mutations: MutationTree<AuthStoreType> = {
  user: (state, payload: { id: number } | null) => {
    state.user = payload;
  },
  isLoggedIn: (state, payload) => {
    state.isLoggedIn = payload;
  },
};

export const actions: ActionTree<AuthStoreType, AuthStoreType> = {
  async login({ commit }, dto: LoginRequestDto) {
    const { data } = await this.$api.auth.authControllerLogin(dto);
    console.log(data);
    commit('user', data);
    commit('isLoggedIn', true);
    this.$router.push('/home');
  },
  async logout({ commit }) {
    await this.$api.auth.authControllerLogout();
    commit('isLoggedIn', false);
    commit('user', null);
    this?.$router?.push('/login');
  },
};
