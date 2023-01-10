import React from 'react'
import Image from 'next/image'
import Carousal from 'nuka-carousel'
import * as S from './styles'
type ImageCarousalPresenterProps = {
  images: string[]
  slideIndex: number
  onClickSlideIndex: (index: number) => void
}

export default function ImageCarousalPresenter({
  images,
  slideIndex,
  onClickSlideIndex,
}: ImageCarousalPresenterProps) {
  return (
    <S.Container>
      <S.PreviewDisplayer>
        {images.map((image, index) => (
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
        {images.map((image) => (
          <Image key={image} src={image} alt={image} width={600} height={50} />
        ))}
      </Carousal>
    </S.Container>
  )
}
