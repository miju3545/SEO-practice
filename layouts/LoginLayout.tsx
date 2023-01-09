import React from 'react'
import CommonLayout from './CommonLayout'

type LoginLayoutProps = {
  children: React.ReactNode
}

export default function LoginLayout({ children }: LoginLayoutProps) {
  return (
    <CommonLayout>
      <div className="flex translate-y-40 justify-center h-screen">
        <div className="">
          <h1 className="py-8 text-3xl uppercase font-bold tracking-wider">Login</h1>
          <div>{children}</div>
        </div>
      </div>
    </CommonLayout>
  )
}
