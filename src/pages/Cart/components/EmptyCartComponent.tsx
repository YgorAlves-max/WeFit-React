import styled from 'styled-components';
import StyledDefaultButton from '../../../shared/components/StyledDefaultButton';
import ImageEmpty from "../../../assets/images/empty-img.svg";

const EmptyCartComponent = () => {

    const handleRedirectToPage = () => {
        window.location.href = '/home';
    };
    return (
        <StyledCard>
            <TitleText>Parece que não há nada por aqui :(</TitleText>
            <ImgContent src={ImageEmpty} alt="" />
            <StyledDefaultButton iconSrc={null} qtdItem={null} onClick={handleRedirectToPage} widthVal={180} fontSize={14} label={"VOLTAR"}></StyledDefaultButton>
        </StyledCard>)
}

const ImgContent = styled.img`
    width: 100%;
    max-width: 447px;
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
    height: 532.8px;
    background-color:#FFFFFF;
    border-radius: 4px;

    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    justify-content: space-evenly;
`;
export default EmptyCartComponent;