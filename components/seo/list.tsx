import React from 'react'
import BaseSEO, { BaseSEOProps } from './base'

type ListSEOProps = Pick<BaseSEOProps, 'ogTitle' | 'ogDescription'>

export default function ListSEO({ ogTitle, ogDescription }: ListSEOProps) {
  return <BaseSEO ogTitle={ogTitle} ogDescription={ogDescription} ogType="website" />
}
