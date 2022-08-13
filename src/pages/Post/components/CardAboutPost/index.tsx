import { NavLink } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDay, faComment, faArrowUpRightFromSquare, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import { CardAboutContainer, CardAboutContent, CardFooter, CardHeader, CardMain } from './styles'
import { formatedDistanceToNow } from '../../../../utils/formatedDate'

interface CardProps {
  title: string
  createdAt: string
  link: string
  comments: number
  userName: string
}

export function CardAboutPost({ title, userName = 'Não definido', link, comments, createdAt = new Date().toISOString() }: CardProps) {
  return (
    <CardAboutContainer>
      <CardAboutContent>
        <CardHeader>
          <NavLink to={'/'}>
            <FontAwesomeIcon icon={faChevronLeft} size="lg" />
            VOLTAR
          </NavLink>
          <a href={link}>
            VER NO GITHUB
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="lg" />
          </a>
        </CardHeader>
        <CardMain>
          <span>{title}</span>
        </CardMain>
        <CardFooter>
          <span>
            <FontAwesomeIcon icon={faGithub} />
            {userName}
          </span>
          <span>
            <FontAwesomeIcon icon={faCalendarDay} />
            {formatedDistanceToNow(createdAt)}
          </span>
          <span>
            <FontAwesomeIcon icon={faComment} />
            {comments} {comments > 1 || comments === 0 ? 'comentários' : 'comentário'}
          </span>
        </CardFooter>
      </CardAboutContent>
    </CardAboutContainer>
  )
}
