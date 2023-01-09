import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useSession } from '../context/session'

export default function Home() {
  const router = useRouter()
  const { session } = useSession()

  useEffect(() => {
    if (session.token) {
      router.push('/attractions?page=1&per_page=10')
    } else {
      router.push('/login')
    }
  }, [session.token])

  return <div>홈</div>
}
