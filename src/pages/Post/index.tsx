import { useParams } from 'react-router-dom'

export function Post() {
  const { id } = useParams()

  console.log('Rota com id', id)

  return (
    <div>
      <h1>POST</h1>
    </div>
  )
}
