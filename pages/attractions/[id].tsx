import { useRouter } from 'next/router'
import * as S from '@/components/Attraction/Detail/styles'
import Map from '@/components/Attraction/Detail/Map'
import ImageCarousalContainer from '@/components/Attraction/Detail/ImageCarousal'
import DetailSEO from '@/components/SEO/DetailSEO'
import siteMetaData from '@/data/siteMetaData'
import DetailLayout from '@/components/Layouts/DetailLayout'
import AttractionRepository from 'repositories/AttractionRepository'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'

type SpecsType = {
  title: string
  More: (props: any) => JSX.Element
  props: { [key: string]: any }
}[]

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const { id } = context.query
    const data = await AttractionRepository.getAttractionById({
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
  const specs: SpecsType = [
    { title: 'detail', More: S.Text, props: { children: data?.attraction.detail } },
    {
      title: 'location',
      More: Map,
      props: { latitude: data?.attraction.latitude, longitude: data?.attraction.longitude },
    },
  ]

  return (
    <>
      <DetailSEO
        ogTitle={`${data?.attraction.name} | ${siteMetaData.title}`}
        ogDescription={data?.attraction.detail || siteMetaData.description}
        images={data?.attraction.coverimage}
      />
      <DetailLayout>
        <S.Container>
          <S.Inner>
            <ImageCarousalContainer images={data?.attraction.coverimage} />
            <S.Descriptions>
              <S.Name>{data?.attraction.name}</S.Name>
              {specs.map(({ title, More, props }, i) => (
                <S.SpecWrapper key={title}>
                  <S.SpecTitle>{title}</S.SpecTitle>
                  {<More {...props} />}
                </S.SpecWrapper>
              ))}
            </S.Descriptions>
          </S.Inner>
        </S.Container>
      </DetailLayout>
    </>
  )
}
