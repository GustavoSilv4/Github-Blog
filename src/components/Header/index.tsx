import image from '../../assets/Header-image.svg'
import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <img src={image} alt="" />
    </HeaderContainer>
  )
}
