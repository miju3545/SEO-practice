import React from 'react'
import { Attraction, AttractionList } from '@/data/types'
import Item from '@/components/overview/item'
import Pagination, { PaginationProps } from '@/components/Pagination'
import LayoutWrapper from '@/components/LayoutWrapper'
import CommonLayout from './CommonLayout'
import Footer from '@/components/Footer'

type OverviewLayoutProps = {
  title: string
  overview: AttractionList
  pagination?: PaginationProps
}

export default function OverviewLayout({ title, overview, pagination }: OverviewLayoutProps) {
  return (
    <LayoutWrapper>
      <CommonLayout>
        <div className="space-y-2 pt-6 pb-16 md:space-y-5">
          <h1 className="pt-2 text-xl sm:text-2xl lg:text-3xl py-8  uppercase font-bold tracking-wider">
            {title}
          </h1>
        </div>
        <div className="flex flex-row-reverse mb-4">
          <div>
            <span className="mt-2 text-xs text-slate-600 uppercase font-bold tracking-wider">
              {overview.total} attractions
            </span>
          </div>
        </div>
        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3 ">
          {overview?.data?.map((item: Attraction) => {
            return <Item key={item.id} item={item} />
          })}
        </ul>
        {pagination && <Pagination {...pagination} />}
      </CommonLayout>
      <Footer />
    </LayoutWrapper>
  )
}
