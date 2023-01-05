import React from 'react'
import Head from 'next/head'
import BaseSEO from './base'
import siteMetaData from '@/data/siteMetaData'
import { useRouter } from 'next/router'

type DetailSEOProps = {
  ogTitle: string
  ogDescription: string
  url: string
  images: []
}
export default function DetailSEO({ ogTitle, ogDescription, url, images }: DetailSEOProps) {
  const imageArr =
    images.length === 0 ? [siteMetaData.siteBanner] : typeof images === 'string' ? [images] : images

  const featuredImages = imageArr.map((image) => ({
    '@type': 'ImageObject',
    url: ['https', 'http'].includes(image) ? image : siteMetaData.siteBanner + image,
  }))

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Attraction',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
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
      <BaseSEO
        ogTitle={ogTitle}
        ogDescription={ogDescription}
        ogType="article"
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
