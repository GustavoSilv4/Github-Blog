import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faUserGroup, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import { CardAboutContainer, CardAboutContent, CardFooter, CardHeader, CardMain, ImageGithub } from './styles'

export function CardAbout() {
  return (
    <CardAboutContainer>
      <CardAboutContent>
        <ImageGithub>
          <img src="https://github.com/Gustavosilv4.png" alt="" />
        </ImageGithub>
        <div>
          <CardHeader>
            <span>Gustavo Silva</span>
            <a href="https://github.com/Gustavosilv4">
              GITHUB
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="lg" />
            </a>
          </CardHeader>
          <CardMain>
            <span>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</span>
          </CardMain>
          <CardFooter>
            <span>
              <FontAwesomeIcon icon={faGithub} />
              cameronwll
            </span>
            <span>
              <FontAwesomeIcon icon={faBuilding} />
              Rocketseat
            </span>
            <span>
              <FontAwesomeIcon icon={faUserGroup} />
              32 seguidores
            </span>
          </CardFooter>
        </div>
      </CardAboutContent>
    </CardAboutContainer>
  )
}
