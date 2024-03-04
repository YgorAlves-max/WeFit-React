import { Navigate } from 'react-router';
import { useNewProducts } from '../../context/CartContext';
import UIEmptyCart from './components/UIEmptyCart';
import UIItemsCart from './components/UIItemsCart';
import * as S from './styles';

const Cart = () => {
  const { mProducts, finishBuy } = useNewProducts();
  const handleRenderUI = () => {
    if (finishBuy) {
      return (<Navigate to={'confirmation'} />)
    } else if (mProducts.length) {
      return (
        <UIItemsCart />)
    }
    return (<UIEmptyCart />)
  }
  return (
    <S.CartContent>
      {handleRenderUI()}
    </S.CartContent>
  );
}

export default Cart;