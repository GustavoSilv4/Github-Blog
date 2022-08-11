import { CardAbout } from './components/CardAbout'
import { FormSectionContainer } from './styles'

export function Home() {
  return (
    <div>
      <CardAbout />

      <FormSectionContainer>
        <div>
          <h4>Publicações</h4>
          <span>6 publicações</span>
        </div>
        <form>
          <input type="text" placeholder="Buscar conteúdo" />
        </form>
      </FormSectionContainer>
    </div>
  )
}
