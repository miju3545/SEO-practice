import React, { Dispatch, SetStateAction } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export type PaginationProps = {
  page: number
  totalPages: number
  onChangePage: (value: number) => void
}

export default function Pagination({ page, totalPages, onChangePage }: PaginationProps) {
  return (
    <div className="space-y-2 pt-6 pb-8">
      <div className="flex justify-center space-x-5">
        {Array.from({ length: totalPages }).map((_, index) => {
          const nextPage = index + 1
          return (
            <div
              key={`page-${nextPage}`}
              className={`cursor-pointer ${page === nextPage ? 'font-bold' : ''}`}
              onClick={() => onChangePage(nextPage)}
            >
              {nextPage}
            </div>
          )
        })}
      </div>
    </div>
  )
}
