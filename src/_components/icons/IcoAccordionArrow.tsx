import type { IconProps } from './type'

interface IcoAccordionArrowProps extends IconProps {
  isOpened: boolean
}

export const IcoAccordionArrow = (props: IcoAccordionArrowProps) => {
  const { isOpened } = props
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${isOpened ? 'rotate-180' : ''} h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  )
}
