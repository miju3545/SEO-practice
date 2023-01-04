import React from 'react'
import siteMetaData from '../data/siteMetaData'

export default function Footer() {
  return (
    <footer className="border-t-2 mt-16">
      <div className="mx-auto flex flex-col p-4 pt-4 max-w-full sm:px-10 xl:max-w-screen-xl xl:px-10">
        <div className="text-sm font-bold mb-1">{siteMetaData.title.toUpperCase()}</div>
        <div className="flex text-xs space-x-3">
          <span>이메일: {siteMetaData.email}</span>
          <span>작성자: {siteMetaData.author}</span>
        </div>
      </div>
    </footer>
  )
}
