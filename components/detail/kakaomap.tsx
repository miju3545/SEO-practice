import React from 'react'
import Head from 'next/head'

const APP_KEY = '69c4d041a54b10ea7c48740bc19ac883'

export default function KakaoMap({ latitude, longitude }: { latitude: number; longitude: number }) {
  return (
    <>
      <div id={'map'}></div>
      <Head>
        <script
          type="text/javascript"
          src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${APP_KEY}`}
          defer
        />
      </Head>
    </>
  )
}
