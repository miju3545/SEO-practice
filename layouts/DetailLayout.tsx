import React from 'react'
import CommonLayout from './CommonLayout'
import LayoutWrapper from '@/components/LayoutWrapper'

export default function DetailLayout({ children }: { children: React.ReactNode }) {
  return (
    <LayoutWrapper>
      <CommonLayout>
        <div className="pt-6 pb-6">{children}</div>
      </CommonLayout>
    </LayoutWrapper>
  )
}
