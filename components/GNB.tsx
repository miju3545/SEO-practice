import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import siteMetaData from '../data/siteMetaData'
import gnbLinks from '../data/gnbLinks'
import { useSession } from '../context/session'
import Modal from './Modal'
import { useRouter } from 'next/router'

export default function GNB() {
  const router = useRouter()
  const { session, logout } = useSession()
  const [openModal, setOpenModal] = useState(false)

  const handleLogout = () => {
    logout()
    router.push('/login')
  }

  return (
    <header className="border-b">
      <div className="h-full flex flex-col mx-auto max-w-full px-4 sm:px-10 xl:max-w-screen-xl xl:px-10">
        <div className="pt-6 h-full flex items-center justify-between">
          <div className="sm:block text-xl leading-8 uppercase font-semibold tracking-wider">
            <Link href="/attractions?page=1&per_page=10" aria-label={siteMetaData.gnbTitle}>
              <div className="hidden h-6 sm:block">{siteMetaData.gnbTitle}</div>
              <div className="block h-6 text-xl sm:hidden">{siteMetaData.gnbTitleSmall}</div>
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
      <Modal open={openModal} onClose={() => setOpenModal(false)} className={'top-16 right-10'}>
        <div className="divide-y border border-gray-300 rounded-md p-1 bg-white w-72  shadow-lg shadow-gray-200">
          <div className="p-2 flex items-start">
            <Image
              src={session.user?.avatar || '/static/placeholder.png'}
              alt={session.user?.avatar || '/static/placeholder.png'}
              width={50}
              height={40}
            />
            <div className="ml-2 flex flex-col">
              <Link href={`/users/${session.user?.username}`}>
                <span className="text-sm">{session.user?.username}</span>
              </Link>
              <p className="text-xs">
                {session.user?.fname} {session.user?.lname}
              </p>
            </div>
          </div>
          <ul>
            <li className="hover:bg-gray-50 cursor-pointer p-2 text-sm" onClick={handleLogout}>
              Sign Out
            </li>
          </ul>
        </div>
      </Modal>
    </header>
  )
}
