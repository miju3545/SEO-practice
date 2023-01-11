import React from 'react'
import { Pagination as ManTinePagination } from '@mantine/core'
import * as S from './styles'

export type PaginationProps = {
  currentPage: number
  totalPages: number
  onChangePage: (page: number) => void
}

export default function Pagination({ currentPage, totalPages, onChangePage }: PaginationProps) {
  return (
    <S.Container>
      <ManTinePagination page={currentPage} onChange={onChangePage} total={totalPages} />
    </S.Container>
  )
}
