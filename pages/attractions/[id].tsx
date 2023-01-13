import * as S from '@/components/Attraction/Detail/styles'
import Map from '@/components/Attraction/Detail/Map'
import ImageCarousalContainer from '@/components/Attraction/Detail/ImageCarousal'
import DetailSEO from '@/components/SEO/DetailSEO'
import siteMetaData from '@/data/siteMetaData'
import AttractionApi from '@/repositories/AttractionApi'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import AuthedOnlyLayout from '@/components/AuthedOnlyLayout'
import CommonLayout from '@/components/CommonLayout'
import BadRequest from '@/pages/400'

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const { id } = context.query
    const data = await AttractionApi.getById({
      id: Number(id),
    })

    return { props: { data } }
  } catch (error) {
    return { props: {} }
  }
}

export default function AttractionDetailPage({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  if (data.status === 'error') {
    return <BadRequest />
  }

  return (
    <>
      <DetailSEO
        ogTitle={`${data?.attraction?.name} | ${siteMetaData.title}`}
        ogDescription={data?.attraction?.detail || siteMetaData.description}
        images={data?.attraction?.coverimage}
      />
      <AuthedOnlyLayout>
        <CommonLayout>
          <S.LayoutInner>
            <S.Container>
              <S.Inner>
                <ImageCarousalContainer images={data?.attraction?.coverimage} />
                <S.Descriptions>
                  <S.Name>{data?.attraction?.name}</S.Name>
                  <S.SpecWrapper>
                    <S.SpecTitle>detail</S.SpecTitle>
                    <S.Text>{data?.attraction?.detail}</S.Text>
                  </S.SpecWrapper>
                  <S.SpecWrapper>
                    <S.SpecTitle>location</S.SpecTitle>
                    <Map
                      latitude={data?.attraction?.latitude}
                      longitude={data?.attraction?.longitude}
                    />
                  </S.SpecWrapper>
                </S.Descriptions>
              </S.Inner>
            </S.Container>
          </S.LayoutInner>
        </CommonLayout>
      </AuthedOnlyLayout>
    </>
  )
}
