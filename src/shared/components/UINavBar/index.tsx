import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import iconcart from "../../assets/icons/icon-cart.svg";
import { useNewProducts } from "../../../context/CartContext";
const UINavBar = () => {
  const { mProducts } = useNewProducts();
  const location = useLocation();
  const isConfirmationPage = location.pathname === '/cart/confirmation';
  const totalItemCount = mProducts.reduce((total, product) => total + product.quantity, 0);
  return (
    <StyledBar>
      {!isConfirmationPage ?
        <LinkTo to="home">
          <LinkToHome>WeMovies</LinkToHome>
        </LinkTo>
        :
        <LinkToHome>WeMovies</LinkToHome>
      }

      <LinkTo to="cart">
        <MyCartDiv>
          <LinkToCart>
            <MyCart> Meu carrinho</MyCart>
            <ItemsCount>{totalItemCount} itens</ItemsCount>
          </LinkToCart>
          <IconCart src={iconcart} />
        </MyCartDiv>
      </LinkTo>
    </StyledBar >
  );
};

const ItemsCount = styled.div`
  height: 19px;
  color: #999999;
  font-weight: 600;
  font-size: 12px;
  margin: 0;
  text-align: right;

`;

const IconCart = styled.img`
  width: 31.98px;
  height: 32px;
`;
const MyCartDiv = styled.div`
  display: flex;
  padding-right: 16px;
  width: 135.93px;
  height: 38px;
  gap: 8px;
    text-wrap: nowrap;
  @media (max-width: 768px) {
    align-items: center;
    width:81.96px;
  }
 
`;
const MyCart = styled.div`
  @media (max-width: 768px) {
   display:none; 
  }
`;
const LinkTo = styled(Link)`
  text-decoration: none;
`;
const LinkToCart = styled.div`
  height: 19px;
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
  text-decoration: none;
`;
const LinkToHome = styled.div`
  width: 101.94px;
  height: 25px;
  font-size: 20px;
  padding: 22px 16px;
  font-weight: 700;
  color: #ffffff;
  text-decoration: none;
`;
const StyledBar = styled.nav`
  height:57px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6.5px 0px;
  margin-bottom: 28px;
    @media (max-width: 768px) {
        margin-bottom: 0px;
    }
   
`;

export default UINavBar;
