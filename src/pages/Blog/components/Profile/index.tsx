import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons'

import { ExternalLink } from '../../../../components/ExternalLink'

import { ProfileContainer, ProfileDetails, ProfilePicture } from './styles'

export function Profile() {
  return (
    <ProfileContainer>
      <ProfilePicture src="https://github.com/felipe-gomes-vicente.png" />

      <ProfileDetails>
        <header>
          Felipe Vicente
          <ExternalLink text="Github" />
        </header>
        <p>
          Software Engineer | Front End | React, React Native, Next.js,
          Typescript, and Node.js
        </p>
        <ul>
          <li>
            <FontAwesomeIcon icon={faGithub} />
            felipe-gomes-vicente
          </li>
          <li>
            <FontAwesomeIcon icon={faBuilding} />
            Cidade Curitiba
          </li>
          <li>
            <FontAwesomeIcon icon={faUserGroup} />
            123 seguidores
          </li>
        </ul>
      </ProfileDetails>
    </ProfileContainer>
  )
}
