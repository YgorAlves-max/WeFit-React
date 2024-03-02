import StyledDefaultButton from "../../../shared/components/StyledDefaultButton";
import ImgBuy from '../../../assets/images/buy-img.svg';
import styled from "styled-components";

const FinishBuyCartComponent = () => {

    const handleRedirectToPage = () => {
        window.location.href = '/home';
    };
    return (
        <StyledCard>
            <TitleText>Compra realizada com sucesso!</TitleText>
            <ImgContent src={ImgBuy} alt="" />
            <StyledDefaultButton iconSrc={null} qtdItem={null} onClick={handleRedirectToPage} widthVal={180} fontSize={14} label={"VOLTAR"}></StyledDefaultButton>
        </StyledCard>)
}

const ImgContent = styled.img`
    width: 100%;
    max-width:294.96px;
    height: 307px;
`;
const TitleText = styled.h1`
    height: 35px;
    margin:0;
    color:#2F2E41;
    font-size: 20px;
    font-weight: 700;
    line-height: 27px;
    letter-spacing: 0em;
    text-align: center;
`;
const StyledCard = styled.div`
    height: 574px;
    background-color:#FFFFFF;
    border-radius: 4px;

    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    justify-content: space-evenly;
`;
export default FinishBuyCartComponent;

