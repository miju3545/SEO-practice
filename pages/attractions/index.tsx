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
import LayoutRenderer from '@/components/LayoutRenderer'

const DEFAULT_LAYOUT = 'ListLayout'

export default function AttractionListPage() {
  const {
    query: { page: queryPage, per_page: queryPerPage },
    push,
  } = useRouter()
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
    push(`/attractions?page=${value}&per_page=${perPage}`)
  }

  const pagination = {
    page,
    totalPages: Number(data?.total_pages),
    onChangePage,
  }

  useEffect(() => {
    if (queryPage) {
      setPage(Number(queryPage))
    }

    if (queryPerPage) {
      setPerPage(Number(queryPerPage) || 10)
    }
  }, [queryPage, queryPerPage])

  if (isLoading) return <Loading />
  if (Number(queryPage) < 1 || Number(queryPage) > Number(data?.total_pages)) {
    return <NotFound />
  }

  return (
    <>
      <ListSEO ogTitle={siteMetaData.title} ogDescription={siteMetaData.description} />
      {data && <LayoutRenderer layout={DEFAULT_LAYOUT} list={data} pagination={pagination} />}
    </>
  )
}
