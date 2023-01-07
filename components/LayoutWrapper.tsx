import React from 'react'
import GNB from './GNB'
import Footer from './Footer'

type LayoutWrapperProps = {
  children: React.ReactNode
}

export default function LayoutWrapper({ children }: LayoutWrapperProps) {
  return (
    <>
      <GNB />
      <div>{children}</div>
      <Footer />
    </>
  )
}
