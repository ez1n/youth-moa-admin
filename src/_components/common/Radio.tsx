import { ComponentProps, useId } from 'react'
import { tw } from '../../../tailwindmerge.config'

interface PropsType extends ComponentProps<'input'> {
  label: string
}

export function Radio(props: PropsType) {
  const { label, value, name, disabled, defaultChecked, onChange, ...rest } =
    props

  const radioId = useId()

  return (
    <label
      className={tw(
        'flex gap-2 w-fit items-center relative cursor-pointer mx-2',
        disabled && 'cursor-not-allowed'
      )}
      htmlFor={radioId}
    >
      <input
        type="radio"
        className="peer"
        id={radioId}
        value={value}
        name={name}
        disabled={disabled}
        defaultChecked={defaultChecked}
        onChange={onChange}
        readOnly
        hidden
        {...rest}
      />
      <span className="border border-gray-002 w-4 h-4 rounded-full after:absolute after:content-[''] after:inline-block after:transition-all after:duration-200 after:ease-in-out after:top-1/2 after:left-[3px] after:-translate-y-1/2 peer-checked:after:rounded-full peer-checked:after:w-[10px] peer-checked:after:h-[10px] peer-disabled:bg-gray-005 peer-disabled:border-border-gray peer-disabled:after:bg-border-gray peer-checked:border-blue peer-checked:after:bg-blue" />
      {label && (
        <span className="mx-3 text-sm font-medium text-gray-002 peer-checked:text-blue">
          {label}
        </span>
      )}
    </label>
  )
}
