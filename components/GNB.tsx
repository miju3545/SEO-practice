import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import siteMetaData from '../data/siteMetaData'
import gnbLinks from '../data/gnbLinks'
import menuLinks from '../data/menuLinks'
import { useSession } from '../context/session'
import Modal from './Modal'

export default function GNB() {
  const { session, logout } = useSession()
  const [openModal, setOpenModal] = useState(false)

  return (
    <header className="border-b-2">
      <div className="h-full flex flex-col mx-auto max-w-full px-4  py-2 sm:px-10 xl:max-w-screen-xl xl:px-10">
        <div className="h-full flex items-center justify-between">
          <div className="w-1/3 flex items-center space-x-3  p-1 font-medium text-sm sm:py-2 leading-5">
            {/* left */}
            <div>메뉴</div>
            <div>검색</div>
          </div>
          <div className="w-1/3 text-center  sm:block italic  text-xl font-semibold leading-8 tracking-tight">
            {/* mid */}
            <Link href="/attractions?page=1&per_page=10" aria-label={siteMetaData.gnbTitle}>
              <div className="hidden h-6 sm:block">{siteMetaData.gnbTitle}</div>
              <div className="block h-6 text-xl sm:hidden">{siteMetaData.gnbTitleSmall}</div>
            </Link>
          </div>
          <div className="w-1/3 flex items-center justify-end leading-5">
            {/* right */}
            {/* <div className="hidden sm:block"> */}
            <div className="">
              {/* {gnbLinks.map((link) => (
                <Link key={link.title} href={link.href} className="p-1 font-medium text-sm sm:p-2">
                  {link.title}
                </Link>
              ))} */}
              <div
                className="rounded-full overflow-hidden border-2 border-gray-400 w-10 h-10 cursor-pointer"
                onClick={() => setOpenModal(true)}
              >
                <Image
                  src={session.user?.avatar || '/static/placeholder.png'}
                  alt={session.user?.avatar || '/static/placeholder.png'}
                  width={40}
                  height={40}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="h-full flex items-center justify-center mt-4">
          {menuLinks.map((link) => (
            <Link key={link.title} href={link.href} className="py-1 font-medium text-sm sm:py-2">
              {link.title}
            </Link>
          ))}
        </div>
      </div>
      <Modal open={openModal} onClose={() => setOpenModal(false)} className={'top-14 right-10'}>
        <div className="border-2 border-gray-300 rounded-md p-1 bg-white w-48">
          <ul className="divide-y">
            <li className="hover:bg-gray-100 cursor-pointer p-2 text-sm" onClick={() => logout()}>
              로그아웃
            </li>
          </ul>
        </div>
      </Modal>
    </header>
  )
}
