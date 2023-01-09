import React from 'react'
import GNB from './GNB'
import Footer from './Footer'

type LayoutWrapperProps = {
  children: React.ReactNode
}

export default function LayoutWrapper({ children }: LayoutWrapperProps) {
  return (
    <div className="min-h-full">
      <GNB />
      <div>{children}</div>
      <Footer />
    </div>
  )
}
