import { User } from 'types/auth.type'
import { fetcher } from 'lib/queryClient'

export type PostLoginParams = {
  username: string
  password: string
}

export type GetUserInfoParams = {
  token: string | null
}

export type LoginResponse = {
  status: string
  message: string
  accessToken: string
  expiresIn: number
  user: User
}

export type UserInfoResponse = {
  status: string
  user: User
}

class AuthRepository {
  public async postLogin({ username, password }: PostLoginParams): Promise<LoginResponse> {
    const data = await fetcher({ method: 'POST', path: '/api/login', body: { username, password } })

    return data
  }

  public async getUserInfo({ token }: GetUserInfoParams): Promise<UserInfoResponse> {
    const data = await fetcher({
      method: 'GET',
      path: '/api/auth/user',
      headers: { Authorization: token },
    })
    return data
  }
}

export default new AuthRepository()
