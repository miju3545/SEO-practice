import { createContext, useContext, useReducer, useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { QueryKeys } from '../utils/queryClient'
import { fetcher } from '@/utils/queryClient'
import Cookies from 'js-cookie'

const SessionContext = createContext<SessionContextType | null>(null)

type UserType = {
  id: number
  fname: string
  lname: string
  username: string
  password: string
  email: string
  avatar: string
}

type SessionContextType = {
  session: SessionType
  login: (token: string, expires: number) => void
  logout: () => void
}

type SessionType = {
  user: UserType | null
  token: string | null
}

type ActionType =
  | { type: 'SET'; payload: { user: UserType; token: string } }
  | { type: 'LOGIN'; payload: { token: string } }
  | { type: 'LOGOUT' }

export function reducer(session: SessionType, action: ActionType): SessionType {
  switch (action.type) {
    case 'SET': {
      const { user, token } = action.payload

      return { ...session, user, token }
    }
    case 'LOGIN': {
      const { token } = action.payload

      return { ...session, token }
    }
    case 'LOGOUT': {
      return { ...session, user: null, token: null }
    }
    default:
      return session
  }
}

const TOKEN_KEY = 'access_token'

export default function SessionProvider({ children }: { children: React.ReactNode }) {
  const token = Cookies.get(TOKEN_KEY)

  const { data } = useQuery([QueryKeys.AUTH, token], () =>
    fetcher({ method: 'GET', path: '/api/auth/user', headers: { Authorization: token } })
  )

  const defaultSession: SessionType = {
    user: null,
    token: null,
  }

  const [session, dispatch] = useReducer(reducer, defaultSession)

  const login = (token: string, expires: number) => {
    Cookies.set(TOKEN_KEY, `Bearer ${token}`, { expires })
    dispatch({ type: 'LOGIN', payload: { token } })
  }

  const logout = () => {
    dispatch({ type: 'LOGOUT' })
    Cookies.remove(TOKEN_KEY)
  }

  const set = (user: UserType, token: string) => {
    dispatch({ type: 'SET', payload: { user, token } })
  }

  useEffect(() => {
    if (data?.user && token) {
      set(data.user, token)
    }
  }, [data?.user, token])

  return (
    <SessionContext.Provider value={{ session, login, logout }}>{children}</SessionContext.Provider>
  )
}

export const useSession = () => {
  const context = useContext(SessionContext)
  if (!context) throw new Error('session context가 없음!!')
  return context
}
