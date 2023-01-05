import React from 'react'
import BaseSEO, { BaseSEOProps } from './base'

type PageSEOProps = Pick<BaseSEOProps, 'ogTitle' | 'ogDescription'>

export default function PageSEO({ ogTitle, ogDescription }: PageSEOProps) {
  return <BaseSEO ogTitle={ogTitle} ogDescription={ogDescription} ogType="website" />
}
