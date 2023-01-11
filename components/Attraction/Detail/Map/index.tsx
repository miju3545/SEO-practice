import React from 'react'
import { IconType } from 'react-icons'
import { TbWorldLatitude, TbWorldLongitude } from 'react-icons/tb'
import * as S from './styles'

type MapProps = {
  latitude: number
  longitude: number
}

export default function Map({ latitude, longitude }: MapProps) {
  const display: { id: number; Icon: IconType; text: number }[] = [
    { id: 1, Icon: TbWorldLatitude, text: latitude },
    { id: 2, Icon: TbWorldLongitude, text: longitude },
  ]

  return (
    <S.Container>
      {display.map(({ id, Icon, text }) => (
        <S.TextWrapper key={id}>
          <S.IconWrapper>{<Icon />}</S.IconWrapper>
          <p>{text}</p>
        </S.TextWrapper>
      ))}
    </S.Container>
  )
}
