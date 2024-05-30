import { HeaderBar, LinkCart, LinkItem, Links } from './styles'
import logo from '../../assets/images/logo.svg'
import carrinho from '../../assets/images/carrinho.svg'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <HeaderBar>
      <div>
        <Link to="/">
          <img src={logo} alt="EPLAY" />
        </Link>
        <nav>
          <Links>
            <LinkItem>
              <Link to="/categorias">Categorias</Link>
            </LinkItem>
            <LinkItem>
              {' '}
              <a href="#">Novidades</a>{' '}
            </LinkItem>
            <LinkItem>
              {' '}
              <a href="#">Promoções</a>{' '}
            </LinkItem>
          </Links>
        </nav>
      </div>
      <LinkCart href="#">
        0 - produtos(s) <img src={carrinho} alt="carrinho" />
      </LinkCart>
    </HeaderBar>
  )
}
