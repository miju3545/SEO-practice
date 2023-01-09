import React from 'react'

import { Attraction, AttractionList } from '@/data/types'
import Item from '@/components/attraction-list/item'
import Pagination, { PaginationProps } from '@/components/Pagination'
import LayoutWrapper from '@/components/LayoutWrapper'
import CommonLayout from './CommonLayout'

type OverviewLayoutProps = {
  title: string
  list: AttractionList
  pagination?: PaginationProps
}

export default function OverviewLayout({ title, list, pagination }: OverviewLayoutProps) {
  return (
    <LayoutWrapper>
      <CommonLayout>
        <div className="space-y-2 pt-6 pb-16 md:space-y-5">
          <h1 className="pt-2 text-2xl font-bold tracking-tight sm:text-2xl lg:text-3xl">
            {title}
          </h1>
        </div>
        <div className="flex flex-row-reverse mb-4">
          <div>
            <span>{list.total} attractions</span>
          </div>
        </div>
        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3 ">
          {list?.data?.map((item: Attraction) => {
            return <Item key={item.id} item={item} />
          })}
        </ul>
        {pagination && <Pagination {...pagination} />}
      </CommonLayout>
    </LayoutWrapper>
  )
}
