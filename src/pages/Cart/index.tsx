import { useNewProducts } from '../../context/CartContext';
import EmptyCartComponent from './components/EmptyCartComponent';
import BuyCartComponent from './components/FinishBuyCartComponent';
import ItemsCartComponent from './components/ItemsCartComponent';
import * as S from './styles';

const Cart = () => {
  const { mProducts, finishBuy } = useNewProducts();
  const renderComponent = () => {

    if (finishBuy) {
      return (
        <BuyCartComponent />
      )
    } else if (mProducts.length) {
      return (
        <ItemsCartComponent />)
    }
    return (<EmptyCartComponent />)
  }
  return (
    <S.CartContent>
      {renderComponent()}
    </S.CartContent>
  );
}

export default Cart;