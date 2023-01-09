import React from 'react'
import { useSession } from 'context/session'

export default function useIsAuthed() {
  const { session } = useSession()
  return session.user && session.token
}
