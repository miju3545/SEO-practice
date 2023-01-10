import React, { useState, useEffect } from 'react'
import Loading from '@/components/Loading'
import { useRouter } from 'next/router'
import NotFound from '@/pages/404'
import { useSession } from '@/contexts/session'
import { useGetAttractionsQuery } from '../../../queries/attraction.query'
import PageSEO from '../../SEO/PageSEO'
import ListLayout from '@/components/Layouts/ListLayout'
import siteMetaData from '@/data/siteMetaData'
import { AttractionList } from 'types/attraction.type'

export default function AttractionList() {
  const {
    query: { page: queryPage, per_page: queryPerPage },
    push,
  } = useRouter()
  const { sessionLoading, isAuthed } = useSession()
  const [page, setPage] = useState(1)
  const [perPage, setPerPage] = useState(10)
  const { data, isLoading: listLoading } = useGetAttractionsQuery({ page, per_page: perPage })

  const onChangePage = (value: number) => {
    setPage(value)
    push(`/attractions?page=${value}&per_page=${perPage}`)
  }

  const pagination = {
    currentPage: page,
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

  if (sessionLoading || listLoading) return <Loading />
  if (!data) return null
  if (Number(queryPage) < 1 || Number(queryPage) > Number(data?.total_pages)) {
    return <NotFound />
  }

  return (
    <>
      <PageSEO
        ogTitle={`Overview | ${siteMetaData.title}`}
        ogDescription={siteMetaData.description}
      />
      <ListLayout title={'Overview'} list={data} pagination={pagination} />
    </>
  )
}
