import { createContext, useContext, useReducer, useEffect } from 'react'
import Token from 'lib/token'
import { useGetUserInfoQuery } from '@/queries/auth.query'
import { TOKEN_KEY } from 'lib/token'
import { User } from '@/repositories/AuthApi'

export const SessionContext = createContext<SessionContextType | null>(null)

export type SessionContextType = {
  session: SessionType
  isAuthed: boolean
  login: (token: string, expires: number) => void
  logout: () => void
}

type SessionType = {
  user: User | null
  token: string | null
}

type ActionType =
  | { type: 'SET'; payload: { user: User; token: string } }
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
  const token = Token.get(TOKEN_KEY)

  const { data } = useGetUserInfoQuery({ token })

  const defaultSession: SessionType = {
    user: null,
    token: null,
  }

  const [session, dispatch] = useReducer(reducer, defaultSession)

  const login = (token: string, expires: number) => {
    Token.save(TOKEN_KEY, `Bearer ${token}`, expires)
    dispatch({ type: 'LOGIN', payload: { token } })
  }

  const logout = () => {
    dispatch({ type: 'LOGOUT' })
    Token.clear(TOKEN_KEY)
  }

  const set = (user: User, token: string) => {
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
        isAuthed: !!session.token,
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
