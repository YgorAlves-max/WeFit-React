import EmptyCartComponent from './components/EmptyCartComponent';
import ItemsCartComponent from './components/ItemsCartComponent';
import * as S from './styles';
let eTrue: boolean = false;

const Cart = () => {
  return (
    <S.CartContent>{eTrue ?
      <EmptyCartComponent></EmptyCartComponent> : <ItemsCartComponent />
    }
    </S.CartContent>
  );
}

export default Cart;