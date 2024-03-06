import styled, { css } from "styled-components";

// Constantes compartilhadas
export const ContentWrapper = css`
  width: 100%;
  margin-bottom: 16px;
`;

export const DivAddInput = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 120px;
  gap: 8px;
`;

export const StyledInput = styled.input`
  width: 47px;
  height: 26px;
  padding-left: 16px;
  border-radius: 4px;
  border: 1px solid #d9d9d9;
  background-color: #ffffff;
`;

export const MImgContent = styled.img`
  width: 64px;
  height: 82px;
`;
export const ImgContent = styled.img`
  width: 89px;
  height: 114px;
`;

// Mobile
export const MContentPrice = styled.div`
  max-width: 98px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const MContentWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const MContentTotalWrapper = styled.h2`
  ${ContentWrapper};
  display: flex;
  justify-content: flex-end;
  margin: 16px 0;
  align-items: center;
  height: 21px;
`;

export const MTotalValueText = styled.h1`
  color: #2f2e41;
  width: 130.79px;
  margin: 0;
  font-size: 24px;
  font-weight: 700;
  text-align: center;
`;

export const MSubTitleText = styled.h2`
  color: #999999;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0em;
  text-align: end;
  margin: 0;
`;

export const MContentCart = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 231px;
  width: 231px;
  padding-left: 16px;
  gap: 16px;
`;

export const MContentTitle = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MTitleText = styled.h1`
  max-width: 117px;
  width: 100%;
  font-size: 14px;
  font-weight: 700;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
  margin: 0;
`;

export const MValueText = styled.h1`
  font-size: 16px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
  margin: 0;
`;

// Web
export const ContentTotalWrapper = styled.div`
  ${ContentWrapper};
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const CartContent = styled.div<{ height: number }>`
  display: flex;
  gap: 24px;
  max-width: 960px;
  padding: 5px;
  margin-bottom: 76px;
  padding: 16px;
  flex-direction: column;
  @media (max-width: 767px) {
    padding: 0 16px 16px;
    margin: 0;

    height: ${(props: any) =>
      props.height > 666 ? `calc(${props.height}px - 86px)` : `716px`};
  }
`;

export const DivTitleText = styled.div`
  display: flex;
  flex-direction: column;
  height: 48px;
  width: 253px;
  justify-content: center;
  margin: 0 52px 0 52px;
  gap: 8px;
`;

export const StyledDivBottom = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TotalValueText = styled.h1`
  width: 130.79px;
  color: #2f2e41;
  margin: 0px;
  font-size: 24px;
  font-weight: 700;
  text-align: center;
`;

export const TitleText = styled.h1`
  text-align: left;
  margin: 0;
  color: #2f2e41;
  font-size: 14px;
  font-weight: 700;
`;

export const ValueText = styled.h2`
  text-align: left;
  margin: 0;
  color: #2f2e41;
  font-size: 16px;
  font-weight: 700;
`;

export const SubTitleText = styled.h2`
  text-align: left;
  margin: 0;
  color: #999999;
  font-size: 16px;
  font-weight: 700;
`;

export const CartTable = styled.div`
  width: 100%;
  border-collapse: collapse;
`;

export const StyledCard = styled.div<{ pHeigth: number }>`
  justify-content: space-around;
  color: black;
  background-color: #ffffff;
  padding: 24px;
  border-radius: 4px;
  @media (max-width: 767px) {
    height: ${(props: any) =>
      props.pHeigth > 667 && props.pHeigth < 667
        ? `calc(${props.pHeigth}px  - 86px)`
        : `716px`};
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const TableContainer = styled.div`
  border: none;
`;

export const TableTotalRow = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  justify-content: space-between;
`;

export const TableRow = styled.div`
  display: flex;
  align-items: center;
  border-bottom: none;

  &:nth-child(1) {
    max-width: 691px;
    width: 100%;
    margin-bottom: 21px;
    gap: 0;
  }

  img {
    cursor: pointer;
  }
`;

export const TableCell = styled.div`
  flex: auto;

  &:nth-child(1) {
    display: flex;
    align-items: center;
    max-width: 446px;
    width: 100%;
  }
  &:nth-child(2) {
    max-width: 171.21px;
    width: 100%;
  }
  &:nth-child(3) {
    max-width: 213.69px;
    width: 100%;
  }
  &:nth-child(4) {
    text-align: end;
  }
`;

export const TableHeader = styled(TableCell)`
  border: none;
  color: #999999;
  width: 100%;
  font-weight: 700;
  &:nth-child(3) {
    max-width: 73px;
  }
`;

export const ContentDivisedImg = styled.div`
  width: 100%;
  max-width: 447px;
  height: 265.8px;
  text-align: center;
`;

export const EmptyImgContent = styled.img`
  width: 100%;
  max-width: 178.63px;
  height: 264px;
`;

export const EmptyTitleText = styled.h1`
  height: 35px;
  margin: 0;
  color: #2f2e41;
  font-size: 20px;
  font-weight: 700;
  line-height: 27px;
  letter-spacing: 0em;
  text-align: center;
  text-wrap: balance;
`;

export const EmptyStyledCard = styled.div`
  height: 532.8px;
  background-color: #ffffff;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  justify-content: center;
`;

export const TableT = styled(TableHeader)``;
