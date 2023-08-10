import { ComponentProps, ReactNode } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

import { ExternalLinkContainer } from './styles'

type ExternalLinkProps = ComponentProps<typeof ExternalLinkContainer> & {
  text: string
  icon?: ReactNode
  variant?: 'iconLeft'
}

export function ExternalLink({ text, ...rest }: ExternalLinkProps) {
  return (
    <ExternalLinkContainer {...rest}>
      {text}
      <FontAwesomeIcon icon={faUpRightFromSquare} />
    </ExternalLinkContainer>
  )
}
