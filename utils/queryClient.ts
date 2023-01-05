import { QueryClient } from 'react-query'
import siteMetaData from '@/data/siteMetaData'

type AnyOBJ = {
  [key: string]: any
}

export const getClient = (() => {
  let client: QueryClient | null = null

  return () => {
    if (!client) client = new QueryClient()
    return client
  }
})()

export const fetcher = async ({
  method,
  path,
  body,
  params,
}: {
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'
  path: string
  body?: AnyOBJ
  params?: AnyOBJ
}) => {
  const BASE_URL = siteMetaData.siteUrl
  let url = `${BASE_URL}${path}`

  const options: RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': BASE_URL,
    },
  }

  if (body) {
    options.body = JSON.stringify(body)
  }

  if (params) {
    const searchParams = new URLSearchParams(params)
    url += '?' + searchParams.toString()
  }

  try {
    const res = await fetch(url, options)
    const json = await res.json()

    return json
  } catch (error) {
    console.error(error)
  }
}

export const QueryKeys = {
  ATTRACTIONS: 'ATTRACTIONS',
  AUTH: 'AUTH',
}
