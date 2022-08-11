import { useParams } from 'react-router-dom'
import { CardAboutPost } from './components/CardAboutPost'

export function Post() {
  // const { id } = useParams()

  // console.log('Rota com id', id)

  return (
    <div>
      <CardAboutPost />
    </div>
  )
}
