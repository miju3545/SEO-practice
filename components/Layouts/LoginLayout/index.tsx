import React from 'react'
import CommonLayout from '../CommonLayout'
import * as S from './styles'

type LoginLayoutProps = {
  children: React.ReactNode
}

export default function LoginLayout({ children }: LoginLayoutProps) {
  return (
    <CommonLayout>
      <S.Container>
        <S.Title>Login</S.Title>
        <S.Inner>{children}</S.Inner>
      </S.Container>
    </CommonLayout>
  )
}
