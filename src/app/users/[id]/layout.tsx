import { PropsWithChildren } from 'react'

export default function UsersLayout(props: PropsWithChildren) {
  const { children } = props

  return (
    <div className="flex flex-col items-center justify-center h-[100vh]">
      {children}
    </div>
  )
}
