import styled from "styled-components";

export const ContainerSpinner = styled.div`
  display: flex;
  height: 626px;
  align-items: center;
  justify-content: center;
`;
export const ContentSpinner = styled.div`
  display: flex;
  margin: 0 auto;
  height: 83px;
  max-width: 792px;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
export const ContentWrapper = styled.div`
  display: flex;
  margin: 12px 0 76px 0;
  max-width: 960px;
  text-align: center;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
  @media (max-width: 768px) {
    padding: 16px;
    display: flex;
    max-width: 100%;
  }
`;

export const HomeCardTitle = styled.div`
  padding-top: 7px;
  font-size: 12px;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: center;
`;

export const HomeFomatValue = styled.div`
  padding-top: 2px;
  font-size: 16px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: center;
`;

export const HomeImgCard = styled.img`
  width: 147px;
  height: 188px;
`;

export const HomeCardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 287.33px;
  height: 237px;
  font-size: 12px;
  font-weight: 700;
  text-align: center;
  padding-bottom: 8px;
  @media (max-width: 768px) {
    max-width: 321px;
    width: 100%;
  }
`;

export const HomeImgContent = styled.div`
  width: 147px;
  height: 213px;
`;

export const HomeCard = styled.div`
  width: 283px;
  color: #333333;
  height: 285px;
  padding: 10px 11px 10px 11px;
  background-color: #ffffff;
  border-radius: 4px;

  @media (max-width: 768px) {
    align-items: center;
    width: 321px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
