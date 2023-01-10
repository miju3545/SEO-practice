import React from 'react'
import * as S from './styles'

type CommonLayoutProps = {
  children: React.ReactNode
}

export default function CommonLayout({ children }: CommonLayoutProps) {
  return (
    <S.Container>
      <S.Inner>
        <S.Main>{children}</S.Main>
      </S.Inner>
    </S.Container>
  )
}
