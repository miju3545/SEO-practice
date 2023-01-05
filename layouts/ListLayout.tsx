import React from 'react'

import { Attraction, AttractionList } from '@/data/types'
import Item from '@/components/attraction-list/item'

type ListLayoutProps = {
  title: string
  list: AttractionList
}

export default function ListLayout({ title, list }: ListLayoutProps) {
  const { data } = list

  return (
    <div>
      <div className="space-y-2 pt-6 pb-16 md:space-y-5">
        <h1 className="pt-2 text-2xl font-bold tracking-tight sm:text-2xl lg:text-3xl">{title}</h1>
      </div>
      <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3 ">
        {data.map((item: Attraction) => {
          return <Item key={item.id} item={item} />
        })}
      </ul>
    </div>
  )
}
