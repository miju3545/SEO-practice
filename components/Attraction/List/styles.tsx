import tw from 'twin.macro'

export const TitleWrapper = tw.div`
space-y-2 pt-6 pb-16 md:space-y-5
`
export const Title = tw.h1`
pt-2 text-xl sm:text-2xl lg:text-3xl py-8 uppercase font-bold tracking-wider
`
export const InfoWrapper = tw.div`
flex flex-row-reverse mb-4
`
export const TotalInfo = tw.span`
mt-2 text-xs text-slate-600 uppercase font-bold tracking-wider
`
export const ItemList = tw.ul`
grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3
`
