import CircularProgress from '@mui/joy/CircularProgress';
import { useNewProducts } from '../../context/CartContext';
import ItemsCardsComponent from './components/ItemsCardsComponent';
import * as S from "./styles";
import { useState } from 'react';

const Home = () => {
  const [obj, setObj] = useState(false);
  setTimeout(() => {
    setObj(true)
  }, 2000);
  const { products } = useNewProducts()

  return (
    <>
      {
        products.length && obj ?
          <S.ContentWrapper>
            {products.map((items) => <ItemsCardsComponent key={items.id} product={items} />)}
          </S.ContentWrapper>
          :
          <S.ContainerSpinner>
            <S.ContentSpinner>
              <CircularProgress
                color="neutral"
                sx={{
                  "--CircularProgress-trackThickness": "2px",
                  "--CircularProgress-size": "62.25px",
                  "--CircularProgress-progressThickness": "2px"
                }}
              />
            </S.ContentSpinner>
          </S.ContainerSpinner>
      }
    </>

  );
}

export default Home;