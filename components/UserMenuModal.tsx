import React from 'react'
import { useSession } from '../context/session'
import Modal from './Modal'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

type UserMenuModalProps = {
  open: boolean
  onClose: () => void
}

export default function UserMenuModal({ open, onClose }: UserMenuModalProps) {
  const router = useRouter()
  const { session, logout } = useSession()

  const handleLogout = () => {
    logout()
    router.push('/login')
  }

  const menu = [{ title: 'Sign Out', action: handleLogout }]

  return (
    <Modal open={open} onClose={onClose} className={'top-16 right-10'}>
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
          {menu.map((item, i) => (
            <li
              key={`menu-${i}`}
              className="hover:bg-gray-50 cursor-pointer p-2 text-sm"
              onClick={item.action}
            >
              {item.title}
            </li>
          ))}
        </ul>
      </div>
    </Modal>
  )
}
