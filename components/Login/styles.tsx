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
export const LayoutContainer = tw.div`
flex flex-col items-center -translate-y-20 justify-center h-screen
`
export const LayoutTitle = tw.h1`
py-8 text-3xl uppercase font-bold tracking-wider
`
