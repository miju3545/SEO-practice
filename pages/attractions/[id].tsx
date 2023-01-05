import React, { useState } from 'react'
import Carousal from 'nuka-carousel'
import Image from 'next/image'

export default function AttractionDetailPage() {
  const [slideIndex, setSlideIndex] = useState(0)
  const dummy = {
    id: 10,
    name: 'Great Pyramid of Giza',
    detail:
      'The Great Pyramid of Giza is the oldest and largest of the pyramids in the Giza pyramid complex bordering present-day Giza in Greater Cairo, Egypt. It is the oldest of the Seven Wonders of the Ancient World, and the only one to remain largely intact.',
    coverimage: 'https://www.melivecode.com/attractions/10.jpg',
    latitude: 29.979167,
    longitude: 31.134167,
  }

  const images = [
    { original: dummy.coverimage, thumbnail: dummy.coverimage },
    { original: dummy.coverimage, thumbnail: dummy.coverimage },
  ]

  return (
    <div className="relative pt-3">
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <div className="flex ">
          <div className="flex-col space-y-2 mr-3 hidden sm:flex ">
            {images.map((image, index) => (
              <div
                key={image.original}
                className={`${index === slideIndex ? 'ring-2 ring-gray-900' : ''}`}
              >
                <Image
                  src={image.original}
                  alt={image.original}
                  width={300}
                  height={20}
                  onClick={() => setSlideIndex(index)}
                />
              </div>
            ))}
          </div>
          <Carousal withoutControls={true} wrapAround slideIndex={slideIndex}>
            {images.map((image) => (
              <Image
                key={image.original}
                src={image.original}
                alt={image.original}
                width={600}
                height={50}
              />
            ))}
          </Carousal>
        </div>
        <div>설명</div>
      </div>
    </div>
  )
}
