import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import siteMetaData from '../data/siteMetaData'
import gnbLinks from '../data/gnbLinks'
import { useSession } from '../context/session'
import { useRouter } from 'next/router'
import UserMenuModal from './UserMenuModal'

export default function GNB() {
  const router = useRouter()
  const { session } = useSession()
  const [openModal, setOpenModal] = useState(false)

  return (
    <header id="gnb" className="border-b fixed top-0 left-0 right-0 h-36 bg-white z-10">
      <div className="h-full flex flex-col mx-auto max-w-full px-4 sm:px-10 xl:max-w-screen-xl xl:px-10">
        <div className="pt-6 h-full flex items-center justify-between">
          <div className="sm:block text-xl leading-8 uppercase font-semibold tracking-wider">
            <Link href="/attractions?page=1&per_page=10" aria-label={siteMetaData.gnbTitle}>
              <div className="h-6">{siteMetaData.gnbTitle}</div>
            </Link>
          </div>
          <div className=" flex items-center justify-end leading-5">
            <div
              className="rounded-full overflow-hidden w-8 h-8 cursor-pointer"
              onClick={() => setOpenModal(true)}
            >
              <Image
                src={session.user?.avatar || '/static/placeholder.png'}
                alt={session.user?.avatar || '/static/placeholder.png'}
                width={40}
                height={40}
              />
            </div>
            <UserMenuModal open={openModal} onClose={() => setOpenModal(false)} />
          </div>
        </div>
        <div className="flex items-center mt-5">
          {gnbLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className={`${
                router.asPath === link.href ? 'border-b-blue-900 font-bold' : ''
              } py-3 px-4 border-b font-medium text-sm translate-y-px`}
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </header>
  )
}
