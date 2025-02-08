import { ComponentProps, useId } from 'react'
import { tw } from '../../../tailwindmerge.config'

interface PropsType extends ComponentProps<'input'> {
  label: string
}

export const RadioButton = (props: PropsType) => {
  const { label, value, name, disabled, defaultChecked, onChange, ...rest } =
    props
  const radioId = useId()

  return (
    <label htmlFor={radioId} className="relative cursor-pointer">
      <input
        type="radio"
        className="peer hidden"
        id={radioId}
        value={value}
        name={name}
        disabled={disabled}
        defaultChecked={defaultChecked}
        onChange={onChange}
        {...rest}
      />
      <div
        className={tw(
          'px-4 py-2 text-sm font-medium rounded-full border transition',
          'text-gray-500 border-gray-300 bg-gray-100',
          'peer-checked:bg-blue peer-checked:text-white peer-checked:border-blue-600',
          'peer-disabled:cursor-not-allowed peer-disabled:bg-gray-200 peer-disabled:text-gray-400'
        )}
      >
        {label}
      </div>
    </label>
  )
}
