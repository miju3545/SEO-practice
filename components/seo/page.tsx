import React from 'react'
import CommonSEO, { BaseSEOProps } from './common'

type PageSEOProps = Pick<BaseSEOProps, 'ogTitle' | 'ogDescription'>

export default function PageSEO({ ogTitle, ogDescription }: PageSEOProps) {
  return <CommonSEO ogTitle={ogTitle} ogDescription={ogDescription} ogType="website" />
}
