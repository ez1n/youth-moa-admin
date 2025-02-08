type IconProps = {
  direction: 'up' | 'down' | 'left' | 'right'
}

export const IcoArrow = (props: IconProps) => {
  const { direction } = props
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${direction === 'down' ? 'rotate-0' : ''}
        ${direction === 'up' ? 'rotate-180' : ''}
        ${direction === 'left' ? 'rotate-90' : ''}
        ${
          direction === 'right' ? '-rotate-90' : ''
        } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  )
}
