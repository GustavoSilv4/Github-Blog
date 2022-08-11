import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDay, faComment, faArrowUpRightFromSquare, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import { CardAboutContainer, CardAboutContent, CardFooter, CardHeader, CardMain } from './styles'
import { NavLink } from 'react-router-dom'

export function CardAboutPost() {
  return (
    <CardAboutContainer>
      <CardAboutContent>
        <CardHeader>
          <NavLink to={'/'}>
            <FontAwesomeIcon icon={faChevronLeft} size="lg" />
            VOLTAR
          </NavLink>
          <a href="https://github.com/Gustavosilv4">
            VER NO GITHUB
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="lg" />
          </a>
        </CardHeader>
        <CardMain>
          <span>Gustavo Silva</span>
        </CardMain>
        <CardFooter>
          <span>
            <FontAwesomeIcon icon={faGithub} />
            cameronwll
          </span>
          <span>
            <FontAwesomeIcon icon={faCalendarDay} />
            Há 1 dia
          </span>
          <span>
            <FontAwesomeIcon icon={faComment} />5 comentários
          </span>
        </CardFooter>
      </CardAboutContent>
    </CardAboutContainer>
  )
}
