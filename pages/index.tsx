import React, { useEffect } from 'react'
import { useSession } from '../contexts/session'
import { useRouter } from 'next/router'
import { DEFAULT_PATH } from '../data/siteMetaData'

export default function Home() {
  const { isAuthed } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (!isAuthed) {
      router.push('/login')
    } else {
      router.push(DEFAULT_PATH)
    }
  }, [isAuthed, router])

  return <div>Home</div>
}
