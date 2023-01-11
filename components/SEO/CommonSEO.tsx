import React from 'react'
import Head from 'next/head'
import siteMetaData from '@/data/siteMetaData'
import { useRouter } from 'next/router'

export type CommonSEOProps = {
  ogTitle: string
  ogDescription?: string
  ogType: string
  ogImage: { '@type': string; url: string }[] | string
  canonicalUrl?: string
}

export default function CommonSEO({
  ogTitle,
  ogDescription,
  ogType,
  ogImage,
  canonicalUrl,
}: CommonSEOProps) {
  const { asPath: path } = useRouter()

  return (
    <Head>
      <title>{ogTitle}</title>
      <meta name="robots" content="follow, index" />
      <meta name="description" content={ogDescription || siteMetaData.description} />
      <meta property="og:url" content={siteMetaData.siteUrl + path} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={siteMetaData.title} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:title" content={ogTitle} />
      {Array.isArray(ogImage) ? (
        ogImage.map(({ url }: { url: string }) => (
          <meta key={url} property="og:image" content={url} />
        ))
      ) : (
        <meta key={ogImage} property="og:image" content={ogImage} />
      )}
      <link rel="canonical" href={canonicalUrl ? canonicalUrl : siteMetaData.siteUrl + path} />
    </Head>
  )
}
