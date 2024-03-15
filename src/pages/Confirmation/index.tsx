import UIDefaultButton from "../../shared/components/UIDefaultButton";
import ImgBuy from '../../assets/images/buy-img.svg';
import * as S from './styles';
const ConfirmPaymentCart = () => {

    const handleRedirectToPage = () => {
        window.location.href = '/home'
    };
    return (
        <S.ContentCard>
            <S.StyledCard>
                <S.TitleText>Compra realizada com sucesso!</S.TitleText>
                <S.ImgContent src={ImgBuy} alt="" />
                <UIDefaultButton onClick={handleRedirectToPage} widthVal={180} fontSize={14} label={"VOLTAR"} />
            </S.StyledCard>
        </S.ContentCard>
    )
}


export default ConfirmPaymentCart;

