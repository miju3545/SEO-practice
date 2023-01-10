import React from 'react'
import CommonSEO, { CommonSEOProps } from './CommonSEO'
import siteMetaData from '@/data/siteMetaData'

type PageSEOProps = Pick<CommonSEOProps, 'ogTitle' | 'ogDescription'>

export default function PageSEO({ ogTitle, ogDescription }: PageSEOProps) {
  return (
    <CommonSEO
      ogTitle={ogTitle}
      ogDescription={ogDescription}
      ogType="website"
      ogImage={siteMetaData.siteUrl + siteMetaData.siteBanner}
    />
  )
}
