import React, { useEffect } from 'react'
import DetailSEO from '@/components/seo/detail'
import { useQuery } from 'react-query'
import { QueryKeys, fetcher } from '../../utils/queryClient'
import { useRouter } from 'next/router'
import Loading from '@/components/Loading'
import useIsAuthed from '../../hooks/useIsAuthed'
import DetailLayout from '@/layouts/DetailLayout'
import { Attraction } from '@/data/types'
import ImageCarousal from '@/components/detail/imageCarousal'
import Description from '@/components/detail/description'
import siteMetaData from '@/data/siteMetaData'
import NotAllowed from 'pages/401'

export default function AttractionDetailPage() {
  const isAuthed = useIsAuthed()
  const {
    query: { id: queryId },
    push,
  } = useRouter()

  const { data, isLoading } = useQuery([QueryKeys.ATTRACTIONS, queryId], () =>
    fetcher({ method: 'GET', path: `/api/attractions/${queryId}` })
  )

  const attraction: Attraction = data?.attraction

  if (isLoading) return <Loading />
  if (!data) return
  if (!isAuthed) return <NotAllowed />

  return (
    <>
      <DetailSEO
        ogTitle={`${attraction.name} | ${siteMetaData.title}`}
        ogDescription={attraction.detail}
        images={attraction.coverimage}
      />
      <DetailLayout>
        <div className="relative pt-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <ImageCarousal images={attraction.coverimage} />
            <Description attraction={attraction} />
          </div>
        </div>
      </DetailLayout>
    </>
  )
}
