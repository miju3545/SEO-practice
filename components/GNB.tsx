import Link from 'next/link'
import React from 'react'
import siteMetaData from '../data/siteMetaData'
import gnbLinks from '../data/gnbLinks'

export default function GNB() {
  return (
    <header className="border-b-2">
      <div className="h-20 flex items-center justify-between mx-auto max-w-full px-4 sm:px-10 xl:max-w-screen-xl xl:px-10">
        <div className="">
          <Link href="/" aria-label={siteMetaData.gnbTitle}>
            {typeof siteMetaData.gnbTitle === 'string' ? (
              <div className="hidden h-6 text-xl font-semibold sm:block">
                {siteMetaData.gnbTitle}
              </div>
            ) : (
              siteMetaData.gnbTitle
            )}
          </Link>
        </div>
        <div className="flex items-center text-base leading-5">
          <div className="hidden sm:block">
            {gnbLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="p-1 font-medium text-gray-900 sm:p-4"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
    // <header className="">
  )
}
