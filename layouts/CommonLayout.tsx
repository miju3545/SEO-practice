import React from 'react'

export default function CommonLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <div className="mx-auto max-w-full px-4 sm:px-10 xl:max-w-screen-xl xl:px-10">
        <main>{children}</main>
      </div>
    </section>
  )
}
