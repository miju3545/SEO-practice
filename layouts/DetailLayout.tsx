import React from 'react'
import CommonLayout from './CommonLayout'
import LayoutWrapper from '@/components/LayoutWrapper'

export default function DetailLayout({ children }: { children: React.ReactNode }) {
  return (
    <LayoutWrapper>
      <CommonLayout>
        <div>{children}</div>
      </CommonLayout>
    </LayoutWrapper>
  )
}
