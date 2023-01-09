import React from 'react'
import CommonLayout from './CommonLayout'

type LoginLayoutProps = {
  children: React.ReactNode
}

export default function LoginLayout({ children }: LoginLayoutProps) {
  return (
    <CommonLayout>
      <div className="flex items-center justify-center h-screen">
        <div className="grid sm:grid-cols-2 h-3/4 w-full sm:gap-8 xl:gap-16">
          <div className="hidden sm:block bg-blue-200">사진</div>
          <div className="px-14 sm:px-0">
            <h1 className="py-8 text-3xl uppercase font-bold tracking-wider">Login</h1>
            <div>{children}</div>
          </div>
        </div>
      </div>
    </CommonLayout>
  )
}
