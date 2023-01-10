import React from 'react'
import { useRouter } from 'next/router'
import Loading from '@/components/Loading'
import { useSession } from '@/contexts/session'
import { useGetAttractionQuery } from 'queries/attraction.query'
import * as S from './styles'
import Map from './Map'
import ImageCarousalContainer from './ImageCarousal'
import DetailSEO from '@/components/SEO/DetailSEO'
import siteMetaData from '@/data/siteMetaData'
import DetailLayout from '@/components/Layouts/DetailLayout'

type SpecsType = {
  title: string
  More: (props: any) => JSX.Element
  props: { [key: string]: any }
}[]

export default function AttractionDetail() {
  const { sessionLoading } = useSession()
  const {
    query: { id: queryId },
    push,
  } = useRouter()

  const { data, isLoading: detailLoading } = useGetAttractionQuery({ id: Number(queryId) })

  if (detailLoading || sessionLoading) return <Loading />
  if (!data) return null

  const attraction = data?.attraction

  const specs: SpecsType = [
    { title: 'detail', More: S.Text, props: { children: attraction.detail } },
    {
      title: 'location',
      More: Map,
      props: { latitude: attraction.latitude, longitude: attraction.longitude },
    },
  ]

  return (
    <>
      <DetailSEO
        ogTitle={`${attraction.name} | ${siteMetaData.title}`}
        ogDescription={attraction.detail}
        images={attraction.coverimage}
      />
      <DetailLayout>
        <S.Container>
          <S.Inner>
            <ImageCarousalContainer images={attraction.coverimage} />
            <S.Descriptions>
              <S.Name>{attraction.name}</S.Name>
              {specs.map(({ title, More, props }, i) => (
                <S.SpecWrapper key={`section-${i}`}>
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
