import React from 'react'
import siteMetaData from '@/data/siteMetaData'
import * as S from './styles'

export default function Footer() {
  const displayInfo = ['email', 'author']

  return (
    <S.Container>
      <S.Inner>
        <S.Title>{siteMetaData.title}</S.Title>
        <S.Descriptions>
          {displayInfo.map((item, i) => (
            <S.TextWrapper key={`footer-item-${i}`}>
              <S.Text>
                {item}: {` `}
              </S.Text>
              {siteMetaData[item]}
            </S.TextWrapper>
          ))}
        </S.Descriptions>
      </S.Inner>
    </S.Container>
  )
}
