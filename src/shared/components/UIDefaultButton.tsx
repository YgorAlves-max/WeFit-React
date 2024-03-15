import styled from "styled-components";
interface UIDefaultButtonpProps {
  widthVal: number;
  label: string;
  onClick: (param: any) => void;
  iconSrc?: string;
  qtdItem?: number;
  fontSize: number;
}

const UIDefaultButton = ({
  widthVal,
  label,
  onClick,
  iconSrc,
  qtdItem,
  fontSize,
}: UIDefaultButtonpProps) => {
  return (
    <StyledDefaultBtn onClick={onClick} width={widthVal} label={label} fontSize={fontSize}>
      {iconSrc && <StyledIcon src={iconSrc} alt="" />}
      {qtdItem != null && (
        <StyledQtdItem>{qtdItem}</StyledQtdItem>
      )}
      {label && <div>{label}</div>}
    </StyledDefaultBtn>
  );
};
const StyledQtdItem = styled.div`
  padding-right: 12px;
  font-family: Open Sans;
  font-size: 12px;
  font-weight: 400;
  padding-left: 3.4px;
`;
const StyledIcon = styled.img`
  width: 13.6px;
  height: 13.6px;
`;
const StyledDefaultBtn = styled.button<{ width: number, label: string, fontSize: number }>`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: ${(props: any) => (props.width ? `${props.width}px` : "287.33px")};
  height: 40px;
  border-radius: 4px;
  font-size: ${(props: any) => (props.fontSize ? `${props.fontSize}px` : "12px")};
  font-weight: 700;
  text-align: center;
  background-color: #009edd;
  color: #ffffff;
  box-shadow: none;
  border: none;
 ${(props: any) =>
    props.label === 'ADICIONAR AO CARRINHO' &&
    `
    &:hover {
      background-color: #039B00;
    }
    @media (max-width: 768px) {
      width: 100%;
      max-width: 321px;
    }
  `}
  ${(props: any) =>
    props.label === 'FINALIZAR PEDIDO' &&
    ` @media (max-width: 767px) {
          width:100%;
          max-width:  100%;
          }
      `}
    
`;


export default UIDefaultButton;
