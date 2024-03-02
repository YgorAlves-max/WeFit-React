import { useNewProducts } from '../../context/CartContext';
import EmptyCartComponent from './components/EmptyCartComponent';
import ItemsCartComponent from './components/ItemsCartComponent';
import * as S from './styles';

const Cart = () => {
  const { mProducts } = useNewProducts();
  console.log(mProducts);

  return (
    <S.CartContent>
      {mProducts.length ?
        <ItemsCartComponent /> : <EmptyCartComponent />
      }
    </S.CartContent>
  );
}

export default Cart;