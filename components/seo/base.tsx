import React from 'react'
import Head from 'next/head'
import siteMetaData from '@/data/siteMetaData'
import { useRouter } from 'next/router'

export type BaseSEOProps = {
  ogTitle: string
  ogDescription?: string
  ogType: string
  ogImage?: any
}

export default function BaseSEO({ ogTitle, ogDescription, ogType, ogImage }: BaseSEOProps) {
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
      <meta
        property="og:image"
        content={ogImage || siteMetaData.siteUrl + siteMetaData.siteBanner}
        key={ogImage}
      />
    </Head>
  )
}
