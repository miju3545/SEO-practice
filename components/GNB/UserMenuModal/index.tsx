import React from 'react'
import { useSession } from '@/contexts/session'
import Modal from '../../Modal'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import * as S from './styles'

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
    <Modal open={open} onClose={onClose} className={'top-20 right-10'}>
      <S.Container>
        <S.ProfileWrapper>
          <Image
            src={session.user?.avatar || '/static/placeholder.png'}
            alt={session.user?.avatar || '/static/placeholder.png'}
            width={50}
            height={40}
          />
          <S.ProfileDetail className="">
            <Link href={`/users/${session.user?.username}`}>
              <S.Username>{session.user?.username}</S.Username>
            </Link>
            <S.FullName>
              {session.user?.fname} {session.user?.lname}
            </S.FullName>
          </S.ProfileDetail>
        </S.ProfileWrapper>
        <S.MenuItemList>
          {menu.map((item, i) => (
            <S.MenuItem key={`menu-${i}`} className="" onClick={item.action}>
              {item.title}
            </S.MenuItem>
          ))}
        </S.MenuItemList>
      </S.Container>
    </Modal>
  )
}
