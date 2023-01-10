import type { AppProps } from 'next/app'
import Head from 'next/head'
import { getClient } from './api/queryClient'
import { QueryClientProvider } from 'react-query'
import SessionProvider from 'context/session'
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  const client = getClient()

  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <QueryClientProvider client={client}>
        <SessionProvider>
          <Component {...pageProps} />
        </SessionProvider>
      </QueryClientProvider>
    </>
  )
}
