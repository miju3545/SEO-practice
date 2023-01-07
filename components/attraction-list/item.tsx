import React from 'react'
import { Attraction } from '@/data/types'
import Link from 'next/link'
import Image from 'next/image'

type ItemProps = {
  item: Attraction
}

export default function Item({ item }: ItemProps) {
  const { id, name, detail, coverimage, latitude, longitude } = item

  return (
    <li key={id} className="rounded-xl">
      <article className="flex flex-col  xl:space-y-0 bg-gray-100">
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
          <div className="p-3">
            <h3 className="text-md leading-8 tracking-tight">
              <Link href={`/attractions/${id}`} className="text-gray-900">
                {name}
              </Link>
            </h3>
          </div>
        </div>
      </article>
    </li>
  )
}
