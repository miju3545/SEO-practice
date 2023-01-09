import React from 'react'
import { Attraction } from '@/data/types'

const APP_KEY = '69c4d041a54b10ea7c48740bc19ac883'

type DescriptionProps = {
  attraction: Attraction
}

const Detail = ({ detail }: { detail: string }) => (
  <p className="text-sm tracking-wider">{detail}</p>
)

const Map = ({ latitude, longitude }: { latitude: number; longitude: number }) => (
  <>
    <div id={'map'}></div>
    <script
      type="text/javascript"
      src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${APP_KEY}`}
      defer
    />
  </>
)

export default function Description({ attraction }: DescriptionProps) {
  const { name, detail, latitude, longitude } = attraction

  const StructuredData: {
    title: string
    Element: (props: any) => JSX.Element
    props: { [key: string]: any }
  }[] = [
    { title: 'detail', Element: Detail, props: { detail } },
    { title: 'location', Element: Map, props: { latitude, longitude } },
  ]

  return (
    <div className="py-2">
      <h2 className="text-xl text-gray-600 uppercase font-bold tracking-wider">{name}</h2>
      {StructuredData.map(({ title, Element, props }, i) => (
        <div key={`section-${i}`} className="mt-4">
          <h3 className="mb-1 text-sm text-gray-400 uppercase font-semibold tracking-wider">
            {title}
          </h3>
          {<Element {...props} />}
        </div>
      ))}
    </div>
  )
}
