import React, { useState } from 'react'
import ImageCarousalPresenter from './view'

type ImagesProps = {
  images: string[] | string
}

export default function ImageCarousal({ images }: ImagesProps) {
  const [slideIndex, setSlideIndex] = useState(0)

  const imageArr =
    !images || images.length === 0
      ? ['/static/empty-image.png']
      : typeof images === 'string'
      ? [images]
      : images

  const onClickSlideIndex = (index: number) => setSlideIndex(index)

  return (
    <ImageCarousalPresenter
      images={imageArr}
      slideIndex={slideIndex}
      onClickSlideIndex={onClickSlideIndex}
    />
  )
}
