import styled from '@emotion/styled'
import tw from 'twin.macro'

export const Form = tw.form`
grid gap-4 w-80 sm:w-80 md:w-96
`

export const ErrorMessage = tw.p`
text-red-500 text-sm

`

export const Button = tw.button`
text-sm mt-6 px-4 py-3 rounded-md bg-gray-900 w-full text-white sm:w-80 md:w-96 disabled:bg-gray-300 mb-2 uppercase font-semibold tracking-wider
`
