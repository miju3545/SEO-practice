import React from 'react'
import { Attraction } from 'types/attraction.type'
import ListItem from '@/components/Attractions/List/ListItem'
import Pagination from '@/components/Attractions/List/Pagination'
import AuthedOnlyLayout from '@/components/Layouts/AuthedOnlyLayout'
import CommonLayout from '../CommonLayout'
import Footer from '@/components/Footer'
import * as S from './styles'
import { AttractionList } from 'types/attraction.type'
import { PaginationProps } from '@/components/Attractions/List/Pagination'

export type ListLayoutProps = {
  title: string
  list: AttractionList
  pagination?: PaginationProps
}

export default function ListLayout({ title, list, pagination }: ListLayoutProps) {
  const { total, data } = list

  return (
    <AuthedOnlyLayout>
      <CommonLayout>
        <S.TitleWrapper>
          <S.Title> {title}</S.Title>
        </S.TitleWrapper>
        <S.InfoWrapper>
          <S.TotalInfo>{total} attractions</S.TotalInfo>
        </S.InfoWrapper>
        <S.ItemList>
          {data?.map((item: Attraction) => (
            <ListItem key={item.id} item={item} />
          ))}
        </S.ItemList>
        {pagination && <Pagination {...pagination} />}
      </CommonLayout>
      <Footer />
    </AuthedOnlyLayout>
  )
}
