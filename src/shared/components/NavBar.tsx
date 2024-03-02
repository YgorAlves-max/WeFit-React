import styled from "styled-components";
import iconcart from "../../assets/icons/icon-cart.svg";
import { Link } from "react-router-dom";
import { useNewProducts } from "../../context/CartContext";
const NavBar = () => {
  const { mProducts } = useNewProducts();

  const totalItemCount = mProducts.reduce((total, product) => total + product.quantity, 0);
  return (
    <StyledBar>
      <LinkTo to="home">WeMovies</LinkTo>
      <MyCartDiv>
        <LinkToCart to="cart">
          Meu carrinho
          <ItemsCount>{totalItemCount} itens</ItemsCount>
        </LinkToCart>
        <IconCart src={iconcart} />
      </MyCartDiv>
    </StyledBar>
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
`;
const LinkToCart = styled(Link)`
  height: 19px;
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
  text-decoration: none;
`;
const LinkTo = styled(Link)`
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
`;

export default NavBar;
