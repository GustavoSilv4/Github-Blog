import { NavLink } from 'react-router-dom'
import RemoveMarkdown from 'remove-markdown'
import { formatedDistanceToNow } from '../../utils/formatedDate'

import { CardContainer, CardContent, CardHeader } from './styles'

interface CardProps {
  numberPost: number
  title: string
  createdAt: string
  contentPost: string
}

export function CardPost({ numberPost, title, createdAt, contentPost }: CardProps) {
  const content = RemoveMarkdown(contentPost, {
    gfm: true,
  })

  return (
    <CardContainer>
      <NavLink to={`/post/${numberPost}`}>
        <CardContent>
          <CardHeader>
            <h3>{title}</h3>
            <span>{formatedDistanceToNow(createdAt)}</span>
          </CardHeader>
          <main>
            <span>{content}</span>
          </main>
        </CardContent>
      </NavLink>
    </CardContainer>
  )
}
