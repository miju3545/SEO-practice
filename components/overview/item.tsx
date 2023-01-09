import React from 'react'
import { Attraction } from '@/data/types'
import Link from 'next/link'
import Image from 'next/image'
import { BiCurrentLocation } from 'react-icons/bi'
type ItemProps = {
  item: Attraction
}

export default function Item({ item }: ItemProps) {
  const { id, name, detail, coverimage, latitude, longitude } = item

  return (
    <li key={id} className="rounded-xl">
      <template className="flex flex-col xl:space-y-0 bg-gray-100">
        <div className="space-y-3 xl:col-span-3">
          <Image
            src={coverimage}
            alt={coverimage}
            aria-placeholder="blur"
            width={600}
            height={300}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z/C/HgAGgwJ/lK3Q6wAAAABJRU5ErkJggg=="
          />
          <div className="py-2 px-4 pb-4">
            <div>
              <div className="font-bold text-slate-700">
                <Link href={`/attractions/${id}`} className="text-gray-900 hover:underline">
                  {name}
                </Link>
              </div>
              <div className="flex items-center mt-2 text-xs text-slate-600 uppercase font-bold tracking-wider">
                <BiCurrentLocation className="mr-2" /> lat: {latitude}, long: {longitude}
              </div>
            </div>
          </div>
        </div>
      </template>
    </li>
  )
}
