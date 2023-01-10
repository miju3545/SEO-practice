import { createContext, useContext, useReducer, useEffect } from 'react'
import { useQuery } from 'react-query'
import { QueryKeys, fetcher } from 'lib/queryClient'
import Token from 'lib/token'
import { TOKEN_KEY } from 'constants/token/token.constant'
import { useGetUserInfoQuery } from 'queries/auth.query.'
export const SessionContext = createContext<SessionContextType | null>(null)

type UserType = {
  id: number
  fname: string
  lname: string
  username: string
  password: string
  email: string
  avatar: string
}

export type SessionContextType = {
  session: SessionType
  sessionLoading: boolean
  isAuthed: boolean
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

export default function SessionProvider({ children }: { children: React.ReactNode }) {
  const token = Token.getToken(TOKEN_KEY)

  const { data, isLoading: sessionLoading } = useGetUserInfoQuery({ token })

  const defaultSession: SessionType = {
    user: null,
    token: null,
  }

  const [session, dispatch] = useReducer(reducer, defaultSession)

  const login = (token: string, expires: number) => {
    Token.setToken(TOKEN_KEY, `Bearer ${token}`, expires)
    dispatch({ type: 'LOGIN', payload: { token } })
  }

  const logout = () => {
    dispatch({ type: 'LOGOUT' })
    Token.clearToken(TOKEN_KEY)
  }

  const set = (user: UserType, token: string) => {
    dispatch({ type: 'SET', payload: { user, token } })
  }

  useEffect(() => {
    if (data?.user && token) {
      set(data?.user, token)
    }
  }, [data, token])

  return (
    <SessionContext.Provider
      value={{
        session,
        sessionLoading,
        isAuthed: session.token !== null && session.user !== null,
        login,
        logout,
      }}
    >
      {children}
    </SessionContext.Provider>
  )
}

export const useSession = () => {
  const context = useContext(SessionContext)
  if (!context) throw new Error('session context not existing!!')
  return context
}
