import React, { useState } from 'react'
import Image from 'next/image'
import Carousal from 'nuka-carousel'
import * as S from './styles'

type ImagesProps = {
  images?: string[] | string
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
    <S.Container>
      <S.PreviewDisplayer>
        {imageArr.map((image, index) => (
          <S.ImageWrapper key={image} active={index === slideIndex}>
            <Image
              key={image}
              src={image}
              alt={image}
              width={200}
              height={20}
              onClick={() => onClickSlideIndex}
            />
          </S.ImageWrapper>
        ))}
      </S.PreviewDisplayer>
      <Carousal withoutControls={true} wrapAround slideIndex={slideIndex}>
        {imageArr.map((image) => (
          <Image key={image} src={image} alt={image} width={600} height={50} />
        ))}
      </Carousal>
    </S.Container>
  )
}
