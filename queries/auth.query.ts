import { useMutation, useQuery } from 'react-query'
import { QueryKeys } from '../lib/queryClient'
import AuthApi, { GetUserInfoParams, PostLoginParams } from '@/repositories/AuthApi'

export const usePostLoginMutation = () => {
  return useMutation(QueryKeys.AUTH, ({ username, password }: PostLoginParams) =>
    AuthApi.login({ username, password })
  )
}

export const useGetUserInfoQuery = ({ token }: GetUserInfoParams) => {
  return useQuery([QueryKeys.ATTRACTIONS, token], () => AuthApi.getUserInfo({ token }))
}
