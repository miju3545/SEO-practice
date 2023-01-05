import React from 'react'

import Link from 'next/link'
import siteMetaData from '../data/siteMetaData'
import gnbLinks from '../data/gnbLinks'
import menuLinks from '../data/menuLinks'

export default function GNB() {
  return (
    <header className="border-b-2 h-20 ">
      <div className="h-full flex flex-col mx-auto max-w-full px-4 sm:px-10 xl:max-w-screen-xl xl:px-10">
        <div className="h-full flex items-center justify-between">
          <div className="w-1/3 flex items-center space-x-3  p-1 font-medium text-sm sm:py-2 leading-5">
            {/* left */}
            <div>메뉴</div>
            <div>검색</div>
          </div>
          <div className="w-1/3 text-center sm:block italic  text-xl font-semibold leading-8 tracking-tight">
            {/* mid */}
            <Link href="/" aria-label={siteMetaData.gnbTitle}>
              <div className="hidden h-6 sm:block">{siteMetaData.gnbTitle}</div>
              <div className="block h-6 text-xl sm:hidden">{siteMetaData.gnbTitleSmall}</div>
            </Link>
          </div>
          <div className="w-1/3 flex items-center justify-end leading-5">
            {/* right */}
            <div className="hidden sm:block">
              {gnbLinks.map((link) => (
                <Link key={link.title} href={link.href} className="p-1 font-medium text-sm sm:p-2">
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="h-full flex items-center justify-center">
          {menuLinks.map((link) => (
            <Link key={link.title} href={link.href} className="py-1 font-medium text-sm sm:py-2">
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </header>
  )
}
