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
  font-weight: ${(props) => (!props.miniCart ? "600" : "300")};
  font-size: ${(props) => (!props.miniCart ? "30px" : "16px")};
`;

export const ProductName = styled.div`
  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: ${(props) => (!props.miniCart ? "30px" : "16px")};
`;

export const ProductPrice = styled.div`
  font-family: "Raleway";
  font-style: normal;
  font-weight: 700;
  font-size: ${(props) => (!props.miniCart ? "24px" : "16px")};
`;

export const Container = styled.div`
  margin: 0 100px;

  @media (max-width: 700px) {
    margin: 0 20px;
  }
`;

export const InfoRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin: 24px 0;
  max-height: ${(props) => (!props.miniCart ? "400px" : "290px")};
  height: auto;

  @media screen and (max-width: 768px) {
    padding-bottom: 30px;
    max-height: 700px;
  }
`;

export const InfoColumn = styled.div`
  flex: 1;
  max-width: 70%;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    justify-content: center;
  }
`;

export const SummaryColumn = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 20px;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    flex-direction: row;
    padding-top: 20px;
  }
`;

export const CarouselColumn = styled.div`
  max-width: ${(props) => (!props.miniCart ? "20%" : "100%")};
  flex-basis: ${(props) => (!props.miniCart ? "20%" : "40%")};
  display: flex;
  flex-wrap: wrap;
  flex-direction: row-reverse;
  justify-content: flex-start;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    justify-content: center;
    margin-top: 20px;
  }
`;

export const CarouselArrows = styled.div`
  height: 24px;
  width: 60px;
  display: flex;
  justify-content: space-between;
  color: white;
  text-align: center;
  align-items: center;
`;

export const Left = styled.div`
  height: 24px;
  width: 24px;
  background-color: rgba(0, 0, 0, 0.73);
  justify-content: center;
  display: flex;
  align-items: center;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    justify-content: center;
  }
`;

export const Right = styled.div`
  height: 24px;
  width: 24px;
  background-color: rgba(0, 0, 0, 0.73);
  justify-content: center;
  display: flex;
  align-items: center;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    justify-content: center;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 280px;
  margin-bottom: 30px;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  cursor: pointer;
  object-fit: contain;
`;

export const BoxQuantity = styled.div`
  border: 1px solid #1d1f22;
  text-align: center;
  align-items: center;
  justify-content: center;
  display: flex;
  width: ${(props) => (!props.miniCart ? "45px" : "24px")};
  height: ${(props) => (!props.miniCart ? "45px" : "24px")};
  cursor: pointer;
  font-size: ${(props) => (!props.miniCart ? "50px" : "25px")};
  font-weight: 300;
`;

export const AttributeName = styled.h2`
  font-family: "Roboto Condensed";
  text-transform: uppercase;
  font-style: normal;
  font-weight: ${(props) => (!props.miniCart ? "700" : "400")};
  font-size: ${(props) => (!props.miniCart ? "18px" : "14px")};
  margin-bottom: 10px;
`;
