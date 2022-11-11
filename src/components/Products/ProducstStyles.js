import styled from "styled-components";

export const WrapperContainer = styled.div`
  margin: 0 80px;

  @media screen and (max-width: 480px) {
    margin: 0px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Product = styled.div`
  flex: 1 1 336px;
  background-color: white;
  margin: 40px 20px;
  height: 444px;
  cursor: pointer;
  position: relative;
  padding: 16px;

  &:hover {
    box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
  }

  &:hover .cart {
    display: flex;
  }
`;

export const ImgContainer = styled.div`
  height: 318px;

  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`;

export const ImgOutOfStockContainer = styled.div`
  height: 318px;
  align-items: center;
  justify-content: center;
  text-align: center;
  display: flex;

  img {
    object-fit: contain;
    opacity: 0.5;
    width: 100%;
    height: 100%;
  }

  span {
    position: absolute;
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    color: #8d8f9a;
  }
`;

export const CategoryTitle = styled.h2`
  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 42px;
  line-height: 160%;
  padding-top: 100px;
  padding-left: 20px;
  text-transform: capitalize;

  @media screen and (max-width: 740px) {
    padding-left: 0px;
    text-align: center;
  }
`;

export const CartOnHover = styled.div`
  width: 52px;
  height: 52px;
  background-color: #5ece7b;
  border-radius: 100%;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: absolute;
  left: 80%;
  top: 70%;
  display: none;
  color: white;
  font-size: 18px;
  z-index: 2;
`;

export const ProductInfo = styled.div`
  margin-top: 40px;
  font-size: 18px;
  font-weight: 300;
  color: ${(props) => (props.inStock ? "#1D1F22" : " #8D8F9A;")};
`;
