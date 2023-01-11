import tw from 'twin.macro'

export const Header = tw.header`
border-b fixed top-0 left-0 right-0 h-36 bg-white z-10
`
export const Inner = tw.div`
h-full flex flex-col mx-auto max-w-full px-4 sm:px-10 xl:max-w-screen-xl xl:px-10
`
export const HeaderContainer = tw.div`
pt-6 h-full flex items-center justify-between
`
export const LogoWrapper = tw.div`
sm:block text-xl leading-8 uppercase font-semibold tracking-wider`

export const Logo = tw.div`
h-6
`
export const UserMenuContainer = tw.div`
flex items-center justify-end leading-5
`
export const AvatarWrapper = tw.div`
rounded-full overflow-hidden w-8 h-8 cursor-pointer
`
export const NavContainer = tw.ul`
flex items-center mt-5
`
export const NavItemWrapper = ({
  active,
  children,
}: {
  active: boolean
  children: React.ReactNode
}) => {
  return (
    <li
      className={`${
        active ? 'border-b-blue-900 font-bold' : ''
      } py-3 px-4 border-b font-medium text-sm `}
    >
      {children}
    </li>
  )
}
