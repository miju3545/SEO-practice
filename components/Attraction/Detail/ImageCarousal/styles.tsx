import tw from 'twin.macro'

export const Container = tw.div`
flex
`

export const PreviewDisplayer = tw.div`
flex-col space-y-2 mr-3 hidden sm:flex 
`

export const ImageWrapper = ({
  active,
  children,
}: {
  active: boolean
  children: React.ReactNode
}) => {
  return <div className={`${active ? 'ring-2 ring-gray-900' : ''}`}>{children}</div>
}
