import React from 'react'
import Link from 'next/link'
import PageSEO from '@/components/seo/page'
import siteMetaData from '@/data/siteMetaData'

export default function NotAllowed() {
  return (
    <>
      <PageSEO ogTitle={`401(Not-allowed) - ${siteMetaData.title}`} />
      <div className="flex flex-col items-center  md:mt-24 m-auto">
        <div className="max-w-4xl flex flex-col items-center justify-center">
          <p className="mb-5 text-lg font-base leading-normal text-gray-700">401</p>
          <p className="mb-8 text-4xl font-semibold">Looks like not allowed</p>
          <Link href="/login">
            <button className="focus:shadow-outline-black inline rounded-md border border-transparent bg-gray-900 px-6 py-3 text-md font-medium leading-7 text-white  transition-colors duration-150 hover:bg-white hover:text-gray-900 hover:border-2 hover:border-gray-700 focus:outline-none">
              Go to Login
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}
