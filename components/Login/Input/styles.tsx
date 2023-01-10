import tw from 'twin.macro'
import { IconType } from 'react-icons'

export const Container = tw.div`
w-full
`

export const Label = tw.label`
block text-gray-700 mb-2 text-xs uppercase font-semibold tracking-wider
`

export const InputWrapper = tw.div`
relative mt-1 rounded-md shadow-sm
`

export const IconWrapper = tw.div`
pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3
`
export const Icon = tw.span`
text-gray-500 text-xl
`

export const Input = tw.input`
block w-full rounded-md border-gray-300 pl-10 pr-12 py-2 focus:border-gray-900 outline-none focus:outline-none focus:ring-gray-500
`
export const ErrorWrapper = tw.div`
absolute inset-y-0 right-0 flex items-center
`

export const ErrorLabel = tw.label`
sr-only
`
export const ErrorIcon = ({ invalid, icon }: { invalid: boolean; icon: IconType }) => {
  const Icon = icon
  return (
    <span
      className={`w-10 flex items-center justify-center text-xl ${
        invalid ? 'text-red-500' : 'text-blue-500'
      }`}
    >
      {<Icon />}
    </span>
  )
}
