import React from 'react'
import GNB from './GNB'

type LayoutWrapperProps = {
  children: React.ReactNode
}

export default function LayoutWrapper({ children }: LayoutWrapperProps) {
  return (
    <div className="min-h-full">
      <GNB />
      <div className="mt-36">{children}</div>
    </div>
  )
}
