import React from 'react'
import { IconType } from 'react-icons'
import { TbWorldLatitude, TbWorldLongitude } from 'react-icons/tb'
import * as S from './styles'

type MapProps = {
  latitude: number
  longitude: number
}

export default function Map({ latitude, longitude }: MapProps) {
  const display: { Icon: IconType; text: any }[] = [
    { Icon: TbWorldLatitude, text: latitude },
    { Icon: TbWorldLongitude, text: longitude },
  ]

  return (
    <S.Container>
      {display.map(({ Icon, text }) => (
        <S.TextWrapper key={text}>
          <S.IconWrapper>{<Icon />}</S.IconWrapper>
          <S.Text>{latitude}</S.Text>
        </S.TextWrapper>
      ))}
    </S.Container>
  )
}
