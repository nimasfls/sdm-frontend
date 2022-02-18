import { GetterTree, ActionTree, MutationTree } from 'vuex'
import { ApiClient } from '~/api/api-client'
import { Auth } from '~/api/http-client'

export const state = () => ({
  accessToken: null as string | null,
  refreshToken: null as string | null,
})

type AuthStoreType = ReturnType<typeof state>

export const getters: GetterTree<AuthStoreType, AuthStoreType> = {
  accessToken: (state) => state.accessToken,
  refreshToken: (state) => state.refreshToken,
}

export const mutations: MutationTree<AuthStoreType> = {
  setAccessToken: (state, accessToken: string) => {
    state.accessToken = accessToken
  },
  setRefreshToken(state, refreshToken: string) {
    state.refreshToken = refreshToken
  },
}

export const actions: ActionTree<AuthStoreType, AuthStoreType> = {
  login: async (_, dto) => {
    const result = await ApiClient.auth.authControllerLoginByPhoneNumberPanel(
      dto
    )
    console.log(result)
  },
}
