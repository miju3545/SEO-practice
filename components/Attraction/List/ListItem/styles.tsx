import tw from 'twin.macro'
import NextLink from 'next/link'

export const ListContainer = tw.div`
rounded-xl
`
export const ListInner = tw.article`
flex flex-col xl:space-y-0 bg-gray-100
`
export const ContentContainer = tw.div`
space-y-3 xl:col-span-3
`
export const ContentWrapper = tw.div`
py-2 px-4 pb-4
`
export const NameWrapper = tw.div`
font-bold text-slate-700
`
export const NameLink = tw(NextLink)`
text-gray-800 hover:underline tracking-wider
`
export const LocationWrapper = tw.div`
flex items-center mt-2 text-xs text-slate-600 uppercase font-bold tracking-wider
`
export const Location = tw.span`
ml-1
`
