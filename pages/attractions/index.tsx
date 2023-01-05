import React from 'react'

import ListLayout from '@/layouts/ListLayout'
import ListSEO from '@/components/seo/page'
import siteMetaData from '../../data/siteMetaData'
import { useSession } from '../../context/session'
import { useQuery } from 'react-query'
import { QueryKeys, fetcher } from '../../utils/queryClient'
import { AttractionList } from '@/data/types'
import Loading from '@/components/Loading'

export default function AttractionListPage() {
  const ogTitle = siteMetaData.title
  const ogDescription = siteMetaData.description

  const { data, isLoading } = useQuery<AttractionList>(QueryKeys.ATTRACTIONS, () =>
    fetcher({ method: 'GET', path: '/api/attractions?page=1&per_page=10' })
  )

  if (isLoading) return <Loading />
  if (!data) return

  return (
    <>
      <ListSEO ogTitle={ogTitle} ogDescription={ogDescription} />
      <ListLayout title={'Attractions'} list={data} />
    </>
  )
}
