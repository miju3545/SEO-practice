import tw from 'twin.macro'

export const Container = tw.footer`
border-t mt-16 pt-2 pb-6 bg-gray-50
`

export const Inner = tw.div`
mx-auto flex flex-col p-4 pt-4 max-w-full sm:px-10 xl:max-w-screen-xl xl:px-10
`

export const Title = tw.p`
font-bold mb-1 uppercase
`

export const Descriptions = tw.div`
flex text-xs space-x-3
`
export const TextWrapper = tw.div`
flex
`
export const Text = tw.div`
text-xs font-semibold mb-1 mr-1 text-slate-600 lowercase
`
