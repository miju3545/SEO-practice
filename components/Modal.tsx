import React, { SyntheticEvent, CSSProperties } from 'react'
import CommonLayout from '../layouts/CommonLayout'

type ModalProps = {
  children: React.ReactNode
  open: boolean
  onClose: () => void
  className?: string
}
export default function Modal({ children, open, onClose, className }: ModalProps) {
  if (!open) return null

  return (
    <div onClick={onClose} className="fixed top-0 left-0 right-0 bottom-0 z-10">
      <CommonLayout>
        <div
          onClick={(e: SyntheticEvent) => e.stopPropagation()}
          className={`absolute ${className}`}
        >
          {children}
        </div>
      </CommonLayout>
    </div>
  )
}
