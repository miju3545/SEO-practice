import React from 'react'
import Link from 'next/link'
import PageSEO from '@/components/SEO/PageSEO'
import siteMetaData from '@/data/siteMetaData'
import * as S from '../401/styles'
import { DEFAULT_PATH } from '@/data/siteMetaData'

export default function NotFound() {
  return (
    <>
      <PageSEO ogTitle={`404(Not-found) | ${siteMetaData.title}`} />
      <S.Container>
        <S.Inner>
          <S.Status>401</S.Status>
          <S.Message>Looks like something went wrong with this link.</S.Message>
          <Link href={`${DEFAULT_PATH}`}>
            <S.Button> Back to Overview</S.Button>
          </Link>
        </S.Inner>
      </S.Container>
    </>
  )
}
