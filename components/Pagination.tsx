import React from 'react'
import { Pagination as ManTinePagination } from '@mantine/core'

export type PaginationProps = {
  page: number
  totalPages: number
  onChangePage: (page: number) => void
}

export default function Pagination({ page, totalPages, onChangePage }: PaginationProps) {
  return (
    <div className="mt-10 flex justify-center">
      <ManTinePagination page={page} onChange={onChangePage} total={totalPages} />
    </div>
  )
}
