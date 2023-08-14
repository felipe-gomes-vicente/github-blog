import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faCalendar, faComment } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { ExternalLink } from '../../../../components/ExternalLink'

import { PostHeaderContainer } from './styles'

export function PostHeader() {
  return (
    <PostHeaderContainer>
      <header>
        <ExternalLink text="Voltar" href="#" />
        <ExternalLink text="Ver no Github" href="#" target="_blank" />
      </header>

      <h1>npm: pacotes, pacotes e pacotes</h1>
      <ul>
        <li>
          <FontAwesomeIcon icon={faGithub} />
          felipe-gomes-vicente
        </li>
        <li>
          <FontAwesomeIcon icon={faCalendar} />
          Há 1 dia
        </li>
        <li>
          <FontAwesomeIcon icon={faComment} />5 comentários
        </li>
      </ul>
    </PostHeaderContainer>
  )
}
