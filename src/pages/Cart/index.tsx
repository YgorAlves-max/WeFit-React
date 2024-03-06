import { Navigate } from 'react-router';
import { useNewProducts } from '../../context/CartContext';
import UIEmptyCart from './components/UIEmptyCart';
import UIItemsCart from './components/UIItemsCart';
import * as S from './styles';
import { useEffect, useState } from 'react';

const Cart = () => {
  const { mProducts, finishBuy } = useNewProducts();
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setScreenHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const handleRenderUI = () => {
    if (finishBuy) {
      return (<Navigate to={'confirmation'} />)
    } else if (mProducts.length) {
      return (
        <UIItemsCart pHeigth={screenHeight} />)
    }
    return (<UIEmptyCart />)
  }
  return (
    <S.CartContent height={screenHeight}>
      {handleRenderUI()}
    </S.CartContent>
  );
}

export default Cart;