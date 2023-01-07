import React, { useMemo } from 'react'

type LayoutRenderProps = {
  layout: string
  [key: string]: any
}

export default function LayoutRenderer({ layout, ...rest }: LayoutRenderProps) {
  const Layout = require(`../layouts/${layout}`).default
  return <Layout {...rest} />
}
