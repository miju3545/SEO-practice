import React, { useEffect } from 'react'
import GNB from '../../GNB'
import { useSession } from '../../../contexts/session'
import { useRouter } from 'next/router'
import * as S from './styles'

type LayoutWrapperProps = {
  children: React.ReactNode
}

export default function AuthedOnlyWrapper({ children }: LayoutWrapperProps) {
  const router = useRouter()
  const { isAuthed } = useSession()

  useEffect(() => {
    if (!isAuthed) router.push('/login')
  }, [isAuthed, router])

  return (
    <S.Container>
      <GNB />
      <S.Inner>{children}</S.Inner>
    </S.Container>
  )
}
