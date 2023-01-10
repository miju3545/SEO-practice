import tw from 'twin.macro'

export const Container = tw.div`
flex justify-center items-center md:mt-40 m-auto 
`

export const Inner = tw.div`
max-w-4xl flex flex-col items-center justify-center
`

export const Status = tw.p`
mb-5 text-lg  leading-normal text-gray-700
`
export const Message = tw.p`
mb-8 text-4xl font-semibold
`
export const Button = tw.button`
inline rounded-md border border-transparent bg-gray-900 px-6 py-3 font-medium leading-7 text-white  transition-colors duration-150 hover:bg-white hover:text-gray-900 hover:border-2 hover:border-gray-700 focus:outline-none
`
