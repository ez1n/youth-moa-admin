import { useState } from 'react'
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
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

  // TODO: props 인식 못하는 에러 수정 필요
  return (
    <Accordion
      className="rounded-lg"
      open={isOpen}
      icon={<IcoAccordionArrow isOpened={isOpen} />}
    >
      <AccordionHeader
        className="p-2"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {title}
      </AccordionHeader>
      <AccordionBody className="p-3">{children}</AccordionBody>
    </Accordion>
  )
}
