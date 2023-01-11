import Link from 'next/link'
import PageSEO from '@/components/SEO/PageSEO'
import siteMetaData from '@/data/siteMetaData'
import * as S from '../components/Errors/styles'
import { DEFAULT_PATH } from '@/data/siteMetaData'

export default function NotFound() {
  return (
    <>
      <PageSEO ogTitle={`400(Bad Request) | ${siteMetaData.title}`} />
      <S.Container>
        <S.Inner>
          <S.Status>400(Bad Request)</S.Status>
          <S.Message>Bad Request</S.Message>
          <Link href={`${DEFAULT_PATH}`}>
            <S.Button>Back to Home</S.Button>
          </Link>
        </S.Inner>
      </S.Container>
    </>
  )
}
