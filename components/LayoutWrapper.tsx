import React from 'react'
import GNB from './GNB'
import Footer from './Footer'

type LayoutWrapperProps = {
  children: React.ReactNode
}

export default function LayoutWrapper({ children }: LayoutWrapperProps) {
  return (
    <section>
      <GNB />
      <div className="mx-auto max-w-full px-4 sm:px-10 xl:max-w-screen-xl xl:px-10">
        <main>{children}</main>
      </div>
      <Footer />
    </section>
  )
}
