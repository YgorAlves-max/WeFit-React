import * as S from '../styles';
import UIDefaultButton from '../../../shared/components/UIDefaultButton';
import ImageEmpty from "../../../assets/images/woman-img.svg";
import UILineDivision from '../../../shared/components/UILineDivision';

const UIEmptyCart = () => {

    const handleRedirectToPage = () => {
        window.location.href = '/home';
    };
    return (
        <S.EmptyStyledCard>
            <S.EmptyTitleText>Parece que não há nada por aqui :(</S.EmptyTitleText>
            <S.ContentDivisedImg>
                <S.EmptyImgContent src={ImageEmpty} alt="" />
                <UILineDivision maxwidth={0} color={"3F3D56"} height={1.36} mbottom={0.1} mtop={0.1} />

            </S.ContentDivisedImg>
            <UIDefaultButton iconSrc={null} qtdItem={null} onClick={handleRedirectToPage} widthVal={180} fontSize={14} label={"VOLTAR"} />
        </S.EmptyStyledCard>)
}


export default UIEmptyCart;