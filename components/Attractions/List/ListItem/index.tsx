import React from 'react'
import Image from 'next/image'
import { AiOutlineGlobal } from 'react-icons/ai'
import * as S from './styles'
import { Attraction } from 'types/attraction.type'

export type ListItemProps = {
  item: Attraction
}
export default function ListItem({ item }: ListItemProps) {
  const { id, name, coverimage, latitude, longitude } = item

  return (
    <S.ListContainer>
      <S.ListInner>
        <S.ContentContainer>
          <Image
            src={coverimage}
            alt={coverimage}
            aria-placeholder="blur"
            width={600}
            height={300}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z/C/HgAGgwJ/lK3Q6wAAAABJRU5ErkJggg=="
          />
          <S.ContentWrapper>
            <S.NameWrapper>
              <S.NameLink href={`/attractions/${id}`}>{name}</S.NameLink>
            </S.NameWrapper>
            <S.LocationWrapper>
              <AiOutlineGlobal />
              <S.Location>
                lat: {latitude}, lng: {longitude}
              </S.Location>
            </S.LocationWrapper>
          </S.ContentWrapper>
        </S.ContentContainer>
      </S.ListInner>
    </S.ListContainer>
  )
}
