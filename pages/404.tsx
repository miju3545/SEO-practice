import Link from 'next/link'
import PageSEO from '@/components/SEO/PageSEO'
import siteMetaData from '@/data/siteMetaData'
import * as S from '../components/Errors/styles'
import { DEFAULT_PATH } from '../data/siteMetaData'
import { useSession } from '../contexts/session'

export default function NotAllowed() {
  const { isAuthed } = useSession()

  return (
    <>
      <PageSEO ogTitle={`404(Not Found) - ${siteMetaData.title}`} />
      <S.Container>
        <S.Inner>
          <S.Status>404</S.Status>
          <S.Message>Not Found</S.Message>
          <Link href={`${isAuthed ? DEFAULT_PATH : '/login'}`}>
            <S.Button>{isAuthed ? 'Back to Home' : 'Go to Login'}</S.Button>
          </Link>
        </S.Inner>
      </S.Container>
    </>
  )
}
