import { ComponentProps } from 'react'
import { tw } from '../../../../../tailwindmerge.config'
import { Label } from '@/_components/common/Label'

interface CellProps extends ComponentProps<'td'> {
  children: React.ReactNode
}

export const Cell = (props: CellProps) => {
  const { children, className, ...rest } = props
  return (
    <td className={tw('p-2', className)} {...rest}>
      {children}
    </td>
  )
}

export const CellLabel = ({ label }: { label: string }) => {
  return (
    <Cell>
      <Label className="text-black" label={label} required={true} />
    </Cell>
  )
}
