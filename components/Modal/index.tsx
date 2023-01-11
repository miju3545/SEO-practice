import React, { SyntheticEvent } from 'react'
import CommonLayout from '../CommonLayout'
import * as S from './styles'

type ModalProps = {
  children: React.ReactNode
  open: boolean
  onClose: () => void
  className?: string
}

export default function Modal({ children, open, onClose, className }: ModalProps) {
  if (!open) return null

  return (
    <S.Container onClick={onClose}>
      <CommonLayout>
        <S.Inner onClick={(e: SyntheticEvent) => e.stopPropagation()} className={className}>
          {children}
        </S.Inner>
      </CommonLayout>
    </S.Container>
  )
}
