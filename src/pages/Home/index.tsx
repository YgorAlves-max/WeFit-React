import CircularProgress from '@mui/joy/CircularProgress';
import { useNewProducts } from '../../context/CartContext';
import ItemsCardsComponent from './components/ItemsCardsComponent';
import * as S from "./styles";

const Home = () => {
  const { products } = useNewProducts()

  return (
    <>
      {
        products.length < 0 ? <CircularProgress
          color="neutral"
          sx={{
            "--CircularProgress-trackThickness": "2px",
            "--CircularProgress-size": "62.25px",
            "--CircularProgress-progressThickness": "2px"
          }}
        /> : <S.ContentWrapper>
          {products.map((items) => <ItemsCardsComponent key={items.id} product={items} />)}
        </S.ContentWrapper>
      }
    </>

  );
}

export default Home;