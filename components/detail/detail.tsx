import React from 'react'

type DetailProps = {
  detail: string
}
export default function Detail({ detail }: DetailProps) {
  return <p className="text-sm tracking-wider">{detail}</p>
}
