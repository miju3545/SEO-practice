import React from 'react'
import ListLayout from '@/layouts/ListLayout'
import ListSEO from '@/components/seo/list'
import siteMetaData from '../../data/siteMetaData'
import { useSession } from '../../context/session'
import { useQuery } from 'react-query'
import { QueryKeys, fetcher } from '../../utils/queryClient'
import { AttractionList } from '@/data/types'

export default function AttractionListPage() {
  const ogTitle = siteMetaData.title
  const ogDescription = siteMetaData.description

  const { data } = useQuery<AttractionList>(QueryKeys.ATTRACTIONS, () =>
    fetcher({ method: 'GET', path: '/api/attractions?page=1&per_page=10' })
  )

  if (!data) return

  return (
    <>
      <ListSEO ogTitle={ogTitle} ogDescription={ogDescription} />
      <ListLayout title={'Attractions'} list={data} />
    </>
  )
}
