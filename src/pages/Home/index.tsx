import CircularProgress from '@mui/joy/CircularProgress';
import { useNewProducts } from '../../context/CartContext';
import * as S from "./styles";
import UIProducts from './components/UIProducts';

const Home = () => {
  const { products, loading } = useNewProducts()

  return (
    <>
      {
        !loading && products.length ?
          <S.ContentWrapper>
            {products.map((items) => <UIProducts key={items.id} product={items} />)}
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