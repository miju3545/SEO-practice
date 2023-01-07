import LayoutWrapper from '@/components/LayoutWrapper'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { getClient } from '../utils/queryClient'
import { QueryClientProvider } from 'react-query'
import SessionProvider from 'context/session'

export default function App({ Component, pageProps }: AppProps) {
  const client = getClient()

  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <SessionProvider>
        <QueryClientProvider client={client}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </SessionProvider>
    </>
  )
}
