import React from 'react'
import CommonLayout from '../CommonLayout'
import AuthedOnlyLayout from '@/components/Layouts/AuthedOnlyLayout'
import * as S from './styles'

export default function DetailLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthedOnlyLayout>
      <CommonLayout>
        <S.Inner>{children}</S.Inner>
      </CommonLayout>
    </AuthedOnlyLayout>
  )
}
