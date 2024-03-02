import styled from "styled-components";

export const CartContent = styled.div`
  display: flex;
  gap: 24px;
  max-width: 960px;
  padding: 5px;
  margin-bottom: 76px;
  flex-direction: column;
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
export const DivAddInput = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 120px;
`;
export const StyledDivBottom = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const StyledInput = styled.input`
  width: 47px;
  height: 26px;
  padding-left: 16px;
  border-radius: 4px;
  border: 1px solid #d9d9d9;
  background-color: #ffffff;
`;
export const LineDivision = styled.div`
  background: #999999;
  max-width: 905px;
  width: 100%;
  height: 1px;
  margin-bottom: 21px;
  margin-top: 21px;
`;
export const ImgContent = styled.img`
  width: 89px;
  height: 114px;
`;
export const TotalValueText = styled.h1`
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

export const StyledCard = styled.div`
  justify-content: space-around;
  color: black;
  background-color: #ffffff;
  padding: 24px;
  border-radius: 4px;
`;
export const ContentTotalWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 197.26px;
  height: 40px;
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
    width: 100;
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

export const TableT = styled(TableHeader)``;
