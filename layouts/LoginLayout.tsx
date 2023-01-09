import PageSEO from '@/components/seo/page'
import React from 'react'
import siteMetaData from '@/data/siteMetaData'
import CommonLayout from './CommonLayout'

type AuthLayout = {
  children: React.ReactNode
}

export default function AuthLayout({ children }: AuthLayout) {
  return (
    <>
      <CommonLayout>
        <div className="flex items-center justify-center h-screen">
          <div className="grid sm:grid-cols-2 h-3/4 w-full sm:gap-8 xl:gap-16">
            <div className="hidden sm:block bg-blue-200">사진</div>
            <div>
              <h1 className="py-8 text-3xl font-bold">Login</h1>
              <div>{children}</div>
            </div>
          </div>
        </div>
      </CommonLayout>
    </>
  )
}
