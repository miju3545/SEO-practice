import React, { useState, useEffect } from 'react'

import ListLayout from '@/layouts/ListLayout'
import ListSEO from '@/components/seo/page'
import siteMetaData from '../../data/siteMetaData'
import { useQuery } from 'react-query'
import { QueryKeys, fetcher } from '../../utils/queryClient'
import { AttractionList } from '@/data/types'
import Loading from '@/components/Loading'
import { useRouter } from 'next/router'
import NotFound from 'pages/404'

export default function AttractionListPage() {
  const router = useRouter()
  const [page, setPage] = useState(1)
  const [perPage, setPerPage] = useState(10)
  const { data, isLoading } = useQuery<AttractionList>(
    [QueryKeys.ATTRACTIONS, page, perPage],
    () =>
      fetcher({
        method: 'GET',
        path: '/api/attractions',
        params: { page, per_page: perPage },
      }),
    { keepPreviousData: true }
  )

  const onChangePage = (value: number) => {
    setPage(value)
    router.push(`/attractions?page=${value}&per_page=${perPage}`)
  }

  const pagination = {
    page,
    totalPages: Number(data?.total_pages),
    perPage,
    onChangePage,
  }

  useEffect(() => {
    if (router.query.page) {
      setPage(Number(router.query.page))
    }

    if (router.query.per_page) {
      setPerPage(Number(router.query.per_page))
    }
  }, [router.query.page, router.query.per_page])

  if (isLoading) return <Loading />
  if (Number(router.query.page) < 1 || Number(router.query.page) > Number(data?.total_pages)) {
    return <NotFound />
  }

  return (
    <>
      <ListSEO ogTitle={siteMetaData.title} ogDescription={siteMetaData.description} />
      {data && <ListLayout title={'Attractions'} list={data} pagination={pagination} />}
    </>
  )
}
