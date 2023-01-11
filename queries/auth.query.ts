import { useMutation, useQuery } from 'react-query'
import { QueryKeys } from '../lib/queryClient'
import AuthRepository, { GetUserInfoParams, PostLoginParams } from 'repositories/AuthRepository'

export const usePostLoginMutation = () => {
  const mutation = useMutation(QueryKeys.AUTH, ({ username, password }: PostLoginParams) =>
    AuthRepository.postLogin({ username, password })
  )

  return mutation
}

export const useGetUserInfoQuery = ({ token }: GetUserInfoParams) => {
  const query = useQuery([QueryKeys.ATTRACTIONS, token], () =>
    AuthRepository.getUserInfo({ token })
  )

  return query
}
