import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import siteMetaData from '@/data/siteMetaData'
import gnbLinks from '@/data/gnbLinks'
import { useSession } from '@/contexts/session'
import { useRouter } from 'next/router'
import UserMenuModal from './UserMenuModal'
import * as S from './styles'

export default function GNB() {
  const router = useRouter()
  const { session } = useSession()
  const [openModal, setOpenModal] = useState(false)

  return (
    <S.Header id="gnb">
      <S.Inner>
        <S.HeaderContainer>
          <S.LogoWrapper className="sm:block text-xl leading-8 uppercase font-semibold tracking-wider">
            <Link href="/attractions?page=1&per_page=10" aria-label={siteMetaData.gnbTitle}>
              <S.Logo>{siteMetaData.gnbTitle}</S.Logo>
            </Link>
          </S.LogoWrapper>
          <S.UserMenuContainer>
            <S.AvatarWrapper onClick={() => setOpenModal(true)}>
              <Image
                src={session.user?.avatar || '/static/placeholder.png'}
                alt={session.user?.avatar || '/static/placeholder.png'}
                width={40}
                height={40}
              />
            </S.AvatarWrapper>
            <UserMenuModal open={openModal} onClose={() => setOpenModal(false)} />
          </S.UserMenuContainer>
        </S.HeaderContainer>
        <S.NavContainer>
          {gnbLinks.map((link) => (
            <S.NavItemWrapper key={link.title} active={router.asPath === link.href}>
              <Link key={link.title} href={link.href}>
                {link.title}
              </Link>
            </S.NavItemWrapper>
          ))}
        </S.NavContainer>
      </S.Inner>
    </S.Header>
  )
}
