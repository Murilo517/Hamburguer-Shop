import { useContext } from 'react';
import Cart from '../../components/Cart';
import { Header } from '../../components/Header';
import { ListProduct } from '../../components/ProductList';
import { CartContext } from '../../contexts/CartContext';
import { StyledPage } from './styles';

export const Home = () => {


  const{ open } = useContext(CartContext)

  return (
    <div>
      <Header/>
      <StyledPage>
        <ListProduct/>
        {open && <Cart/>}
      </StyledPage>
    </div>
  )
}
