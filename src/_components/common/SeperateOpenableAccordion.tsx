import { useState } from 'react'
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  AccordionProps,
} from '@material-tailwind/react'
import { IcoAccordionArrow } from '../icons'

interface SeperateOpenableAccordion {
  title: string
  children: React.ReactNode
  defaultOpen: boolean // 기본적으로 열려 있을지 여부
}

/**
 * 각 Accordion끼리 독립적으로 open할 수 있는 custom component
 */
export function SeperateOpenableAccordion(props: SeperateOpenableAccordion) {
  const { title, defaultOpen, children } = props
  const [isOpen, setIsOpen] = useState(defaultOpen)

  // TODO: props 인식 못하는 에러 수정 필요 (any 타입 캐스팅 제거)
  return (
    <Accordion
      className="rounded-lg"
      open={isOpen}
      icon={<IcoAccordionArrow isOpened={isOpen} />}
      {...({} as any)}
    >
      <AccordionHeader
        className="p-4 border rounded-lg"
        onClick={() => setIsOpen((prev) => !prev)}
        {...({} as any)}
      >
        {title}
      </AccordionHeader>
      <AccordionBody className="p-3 border rounded-b-lg bg-gray-005">
        {children}
      </AccordionBody>
    </Accordion>
  )
}
