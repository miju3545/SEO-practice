import React from 'react'
import { Attraction } from '@/data/types'
import Detail from './detail'
import Map from './map'

type DescriptionProps = {
  attraction: Attraction
}

type StructuredDataType = {
  title: string
  Element: (props: any) => JSX.Element
  props: { [key: string]: any }
}[]

export default function Description({ attraction }: DescriptionProps) {
  const { name, detail, latitude, longitude } = attraction

  const StructuredData: StructuredDataType = [
    { title: 'detail', Element: Detail, props: { detail } },
    { title: 'location', Element: Map, props: { latitude, longitude } },
  ]

  return (
    <div className="py-2">
      <h2 className="text-xl text-gray-600 uppercase font-bold tracking-wider">{name}</h2>
      {StructuredData.map(({ title, Element, props }, i) => (
        <div key={`section-${i}`} className="mt-5">
          <h3 className="mb-1 text-sm text-gray-400 uppercase font-semibold tracking-wider">
            {title}
          </h3>
          {<Element {...props} />}
        </div>
      ))}
    </div>
  )
}
