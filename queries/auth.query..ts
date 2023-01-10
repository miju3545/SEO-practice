import { useMutation, useQuery } from 'react-query'
import { QueryKeys } from '../lib/queryClient'
import AuthRepository, { GetUserInfoParams, PostLoginParams } from 'repo/AuthRepository'

export const usePostLoginMutation = () => {
  const mutation = useMutation(QueryKeys.AUTH, ({ username, password }: PostLoginParams) =>
    AuthRepository.postLogin({ username, password })
  )

  return mutation
}

export const useGetUserInfoQuery = ({ token }: GetUserInfoParams) => {
  const { data, isLoading } = useQuery([QueryKeys.ATTRACTIONS, token], () =>
    AuthRepository.getUserInfo({ token })
  )

  return { data, isLoading }
}
