import React, { useState } from 'react'
import Image from 'next/image'
import Carousal from 'nuka-carousel'

type ImagesProps = {
  images: string[] | string
}

export default function ImageCarousal({ images }: ImagesProps) {
  const [slideIndex, setSlideIndex] = useState(0)

  const imageArr =
    images.length === 0
      ? ['/static/empty-image.png']
      : typeof images === 'string'
      ? [images]
      : images

  return (
    <div className="flex">
      <div className="flex-col space-y-2 mr-3 hidden sm:flex ">
        {imageArr.map((image, index) => (
          <div key={image} className={`${index === slideIndex ? 'ring-2 ring-gray-900' : ''}`}>
            <Image
              key={image}
              src={image}
              alt={image}
              width={200}
              height={20}
              onClick={() => setSlideIndex(index)}
            />
          </div>
        ))}
      </div>
      <Carousal withoutControls={true} wrapAround slideIndex={slideIndex}>
        {imageArr.map((image) => (
          <Image key={image} src={image} alt={image} width={600} height={50} />
        ))}
      </Carousal>
    </div>
  )
}
