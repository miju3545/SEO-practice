import { Dispatch, createContext, useContext, useReducer } from 'react'

const SessionContext = createContext<SessionContextType | null>(null)

type SessionContextType = {
  session: SessionType
  login: (username: string, password: string, token: string) => void
  logout: () => void
}

type SessionType = {
  loginUser: {} | null
  token: string | null
}

type ActionType =
  | { type: 'LOGIN'; payload: { username: string; password: string; token: string } }
  | { type: 'LOGOUT' }

export function reducer(session: SessionType, action: ActionType): SessionType {
  switch (action.type) {
    case 'LOGIN': {
      const { username, password, token } = action.payload

      return { ...session, loginUser: { username, password }, token }
    }
    case 'LOGOUT': {
      return { ...session, loginUser: null, token: null }
    }
    default:
      return session
  }
}

export default function SessionProvider({ children }: { children: React.ReactNode }) {
  const defaultSession: SessionType = {
    loginUser: null,
    token: null,
  }

  const [session, dispatch] = useReducer(reducer, defaultSession)

  const login = (username: string, password: string, token: string) => {
    dispatch({ type: 'LOGIN', payload: { username, password, token } })
  }

  const logout = () => {
    dispatch({ type: 'LOGOUT' })
  }

  return (
    <SessionContext.Provider value={{ session, login, logout }}>{children}</SessionContext.Provider>
  )
}

export const useSession = () => {
  const context = useContext(SessionContext)
  if (!context) throw new Error('session context에 에러 발생')
  return context
}
