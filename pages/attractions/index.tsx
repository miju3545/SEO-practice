import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import BadRequest from '../../pages/400'
import PageSEO from '@/components/SEO/PageSEO'
import siteMetaData from '@/data/siteMetaData'
import AttractionApi, { Attraction } from '@/repositories/AttractionApi'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import AuthedOnlyLayout from '@/components/AuthedOnlyLayout'
import CommonLayout from '@/components/CommonLayout'
import * as S from 'components/Attraction/List/styles'
import ListItem from '@/components/Attraction/List/ListItem'
import Footer from '@/components/Footer'
import Pagination from '@/components/Attraction/List/Pagination'

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const { page, per_page } = context.query

    const data = await AttractionApi.getAll({
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
      setPerPage(Number(queryPerPage))
    }
  }, [queryPage, queryPerPage])

  if (
    isNaN(Number(queryPage)) ||
    isNaN(Number(queryPerPage)) ||
    Number(queryPage) < 1 ||
    Number(queryPage) > Number(data?.total_pages)
  ) {
    return <BadRequest />
  }

  return (
    <>
      <PageSEO
        ogTitle={`Overview | ${siteMetaData.title}`}
        ogDescription={siteMetaData.description}
      />
      <AuthedOnlyLayout>
        <CommonLayout>
          <S.TitleWrapper>
            <S.Title>Overview</S.Title>
          </S.TitleWrapper>
          <S.InfoWrapper>
            <S.TotalInfo>{data.total} attractions</S.TotalInfo>
          </S.InfoWrapper>
          <S.ItemList>
            {data.data?.map((item: Attraction) => (
              <ListItem key={item.id} item={item} />
            ))}
          </S.ItemList>
          {pagination && <Pagination {...pagination} />}
        </CommonLayout>
        <Footer />
      </AuthedOnlyLayout>
    </>
  )
}
