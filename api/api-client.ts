import { Api } from '~/api/http-client'

export const ApiClient = new Api({
  baseURL: process.env.baseUrl || '/',
  withCredentials: true,
})
