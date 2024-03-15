import { UIDefaultButtonpProps } from "./interface";
import * as S from "./style";

const UIDefaultButton = ({
  widthVal,
  label,
  onClick,
  iconSrc,
  qtdItem,
  fontSize,
}: UIDefaultButtonpProps) => {
  return (
    <S.StyledDefaultBtn onClick={onClick} width={widthVal} label={label} fontSize={fontSize}>
      {iconSrc && <S.StyledIcon src={iconSrc} alt="" />}
      {qtdItem != null && (
        <S.StyledQtdItem>{qtdItem}</S.StyledQtdItem>
      )}
      {label && <div>{label}</div>}
    </S.StyledDefaultBtn>
  );
};



export default UIDefaultButton;
