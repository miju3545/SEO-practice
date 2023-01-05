import React from 'react'
import BaseSEO, { CommonSEOProps } from './base'

type PageSEOProps = Pick<CommonSEOProps, 'ogTitle' | 'ogDescription' | 'ogImage'>

export default function PageSEO({ ogTitle, ogDescription, ogImage }: PageSEOProps) {
  return (
    <BaseSEO ogTitle={ogTitle} ogDescription={ogDescription} ogType="website" ogImage={ogImage} />
  )
}
