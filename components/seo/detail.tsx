import React from 'react'
import Head from 'next/head'
import CommonSEO from './common'
import siteMetaData from '@/data/siteMetaData'
import { useRouter } from 'next/router'

type DetailSEOProps = {
  ogTitle: string
  ogDescription: string
  images: [] | string
}

export default function DetailSEO({ ogTitle, ogDescription, images }: DetailSEOProps) {
  const { asPath: path } = useRouter()

  const imageArr =
    images.length === 0 ? [siteMetaData.siteBanner] : typeof images === 'string' ? [images] : images

  const featuredImages = imageArr.map((image) => ({
    '@type': 'ImageObject',
    url: ['https', 'http'].includes(image) ? image : siteMetaData.siteUrl + image,
  }))

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Attraction',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': path,
    },
    headline: ogTitle,
    image: featuredImages,
    author: {
      '@type': 'Person',
      name: siteMetaData.author,
    },
    publisher: {
      logo: {
        '@type': 'ImageObject',
        url: siteMetaData.siteUrl + siteMetaData.siteLogo,
      },
    },
    description: ogDescription,
  }

  return (
    <>
      <CommonSEO
        ogTitle={ogTitle}
        ogDescription={ogDescription}
        ogType="Attraction"
        ogImage={featuredImages}
      />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData, null, 2),
          }}
        />
      </Head>
    </>
  )
}
