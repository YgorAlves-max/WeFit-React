import styled from "styled-components";
import { UIBtnProps } from "./interface";

export const StyledQtdItem = styled.div`
  padding-right: 12px;
  font-family: Open Sans;
  font-size: 12px;
  font-weight: 400;
  padding-left: 3.4px;
`;
export const StyledIcon = styled.img`
  width: 13.6px;
  height: 13.6px;
`;
export const StyledDefaultBtn = styled.button<UIBtnProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: ${({ width = 287.33 }) => `${width}px`};
  height: 40px;
  border-radius: 4px;
  font-size: ${({ fontSize = 12 }) => `${fontSize}px`};
  font-weight: 700;
  text-align: center;
  background-color: #009edd;
  color: #ffffff;
  box-shadow: none;
  border: none;
  ${({ label }) =>
    label === "ADICIONAR AO CARRINHO" &&
    `
    &:hover {
      background-color: #039B00;
    }
    @media (max-width: 768px) {
      width: 100%;
      max-width: 321px;
    }
  `}

  ${({ label }) =>
    label === "FINALIZAR PEDIDO" &&
    ` @media (max-width: 767px) {
          width:100%;
          max-width:  100%;
          }
      `}
`;
