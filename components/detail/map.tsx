import React from 'react'
import { TbWorldLatitude, TbWorldLongitude } from 'react-icons/tb'

export default function map({ latitude, longitude }: { latitude: number; longitude: number }) {
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
