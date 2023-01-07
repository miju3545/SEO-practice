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
      <PageSEO ogTitle={`Login - ${siteMetaData.title}`} ogDescription={siteMetaData.description} />
      <CommonLayout>
        <div className="flex items-center justify-center h-screen">
          <div className="grid grid-cols-2 h-3/4 w-full">
            <div className="hidden sm:block bg-blue-200">사진</div>
            <div className="px-4">
              <h1 className="py-8 text-3xl font-bold">Login</h1>
              <div>{children}</div>
            </div>
          </div>
        </div>
      </CommonLayout>
    </>
  )
}
