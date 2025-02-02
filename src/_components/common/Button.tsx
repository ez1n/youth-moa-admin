import { ComponentProps } from 'react'
import { ReactNode } from 'react'

import { BUTTON_TYPE } from '@/_constants'
import { tw } from '../../../tailwindmerge.config'

interface PropsType extends Omit<ComponentProps<'button'>, 'type'> {
  type?: 'fill' | 'outlined' | 'none'
  rounded?: 'small' | 'large'
  isError?: boolean
  color?: string
  className?: string
  onClick: () => void
  icon?: ReactNode
}

export function Button(props: PropsType) {
  const {
    children,
    type = BUTTON_TYPE.fill,
    rounded = 'small',
    isError = false,
    color,
    className,
    onClick,
    icon,
    ...rest
  } = props

  // const bgColorName = type === BUTTON_TYPE.outlined ? '' : 'bg-blue'
  const bgColorName = (() => {
    switch (type) {
      case (BUTTON_TYPE.outlined, BUTTON_TYPE.none):
        return ''
      default:
        return 'bg-blue'
    }
  })()
  const textColorName = (() => {
    switch (true) {
      case isError:
        return 'text-red'
      case type === BUTTON_TYPE.outlined:
        return 'text-blue'
      case type === BUTTON_TYPE.none:
        return 'text-gray-400'
      default:
        return 'text-white'
    }
  })()
  const borderColorName = isError
    ? 'border-red'
    : type === BUTTON_TYPE.outlined
    ? 'border-blue'
    : ''
  const border = type === BUTTON_TYPE.outlined ? 'border' : ''
  const borderRadius = rounded === 'small' ? 'rounded-lg' : 'rounded-full'

  return (
    <button
      className={tw(
        color,
        !color && bgColorName,
        !color && textColorName,
        border,
        !color && borderColorName,
        borderRadius,
        'h-full py-[15px] font-semibold w-full flex items-center justify-center disabled:bg-gray-002 disabled:text-white disabled:border-gray-002 disabled:cursor-not-allowed',
        className
      )}
      type="button"
      onClick={onClick}
      {...rest}
    >
      {icon && <span className="mr-2 flex justify-center">{icon}</span>}{' '}
      {children}
    </button>
  )
}
