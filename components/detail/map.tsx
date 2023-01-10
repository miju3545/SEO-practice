import React from 'react'
import { TbWorldLatitude, TbWorldLongitude } from 'react-icons/tb'

type MapProps = {
  latitude: number
  longitude: number
}

export default function map({ latitude, longitude }: MapProps) {
  return (
    <p className="text-sm tracking-wider flex flex-col">
      <span className={'flex items-center'}>
        <TbWorldLatitude className="mr-1" />
        {latitude}
      </span>
      <span className={'flex items-center'}>
        <TbWorldLongitude className="mr-1" />
        {longitude}
      </span>
    </p>
  )
}
