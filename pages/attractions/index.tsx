import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import BadRequest from '../../pages/400'
import PageSEO from '@/components/SEO/PageSEO'
import ListLayout from '@/components/Layouts/ListLayout'
import siteMetaData from '@/data/siteMetaData'
import AttractionRepository from 'repositories/AttractionRepository'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'

const DefaultData = {
  page: 1,
  per_page: 10,
  total: 12,
  total_pages: 2,
  data: [],
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const { page, per_page } = context.query

    const data = await AttractionRepository.getAttractions({
      page: Number(page),
      per_page: Number(per_page),
    })

    return { props: { data } }
  } catch (error) {
    return { props: {} }
  }
}

export default function AttractionListPage({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const {
    query: { page: queryPage, per_page: queryPerPage },
    push,
  } = useRouter()
  const [page, setPage] = useState(1)
  const [perPage, setPerPage] = useState(10)

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

  if (Number(queryPage) < 1 || Number(queryPage) > Number(data?.total_pages)) {
    return <BadRequest />
  }

  return (
    <>
      <PageSEO
        ogTitle={`Overview | ${siteMetaData.title}`}
        ogDescription={siteMetaData.description}
      />
      <ListLayout title={'Overview'} list={data || DefaultData} pagination={pagination} />
    </>
  )
}
