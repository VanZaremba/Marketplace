import styled from "styled-components";

export const Title = styled.div`
  font-family: "Raleway";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 160%;
  padding-top: 100px;
  margin-bottom: 55px;
  text-transform: uppercase;
`;

export const ProductBrand = styled.div`
  font-family: "Raleway";
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
`;

export const ProductName = styled.div`
  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
`;

export const ProductPrice = styled.div`
  font-family: "Raleway";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
`;

export const Container = styled.div`
  margin: 0 100px;

  @media (max-width: 700px) {
    margin: 20px;
  }
`;

export const InfoRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  padding: 24px 0;

  @media screen and (max-width: 768px) {
    padding-bottom: 30px;
  }
`;

export const InfoColumn = styled.div`
  flex: 1;
  max-width: 70%;
  max-height: 336px;
  flex-basis: 70%;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const SummaryColumn = styled.div`
  max-width: 10%;
  flex-basis: 10%;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    flex-direction: row;
  }
`;

export const CarouselColumn = styled.div`
  max-width: 20%;
  flex-basis: 20%;
  background-color: pink;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    justify-content: center;
  }
`;

export const CarouselImage = styled.div`
  width: 200px;
  height: 288px;
  margin-left: 24px;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    justify-content: center;
  }
`;

export const BoxQuantity = styled.div`
  border: 1px solid #1d1f22;
  text-align: center;
  align-items: center;
  justify-content: center;
  display: flex;
  width: 45px;
  height: 45px;
  cursor: pointer;
  font-size: 50px;
  font-weight: 300;
`;

export const AttributeName = styled.h2`
  font-family: "Roboto Condensed";
  text-transform: uppercase;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 10px;
`;

export const AttributeValue = styled.div`
  width: 63px;
  height: 45px;
  border: 1px solid #1d1f22;
  display: inline-block;
  font-weight: 400;
  font-size: 16px;
  font-family: "Source Sans Pro";
  font-style: normal;
  margin-right: 12px;
  margin-bottom: 24px;
  cursor: pointer;
  letter-spacing: 0.05em;
  text-align: center;
`;

export const AttributeColor = styled.h2`
  width: 32px;
  height: 32px;
  background-color: ${(props) => props.color};
  display: inline-block;
  margin-right: 10px;
  cursor: pointer;
`;
