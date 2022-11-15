import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

export const ProductImgContainer = styled.div`
  display: flex;
  width: 70%;
  padding: 100px 100px;

  @media (max-width: 700px) {
    padding: 0;
    padding-top: 100px;
    margin: 20px;
    width: 100%;
  }
`;

export const ImgCarousel = styled.div`
  width: 100px;
  height: 360px;
  margin-right: 10px;
  overflow: scroll;
`;

export const Img = styled.div`
  width: 80px;
  height: 80px;
  margin-bottom: 30px;
  background-image: url(${(props) => props.img});
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;
`;

export const ProductImage = styled.div`
  width: 650px;
  height: 600px;
  overflow: hidden;
  background-image: url(${(props) => props.img});
  background-size: contain;
  background-repeat: no-repeat;
  align-items: center;

  @media (max-width: 700px) {
    width: 200px;
    height: auto;
  }
`;

export const ProductBrand = styled.h2`
  font-weight: 600;
  font-size: 30px;
`;

export const ProductName = styled.h2`
  font-weight: 400;
  font-size: 30px;
  margin-bottom: 20px;
`;

export const AttributeName = styled.h2`
  font-family: "Roboto Condensed";
  text-transform: uppercase;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  margin-top: 20px;
  margin-bottom: 8px;
`;

export const AttributeValue = styled.input``;

export const Radio = styled.div`
  border: 1px solid #ccc;
  box-sizing: border-box;
  position: relative;
  width: ${(props) => (!props.miniCart ? "63px" : "24px")};
  height: ${(props) => (!props.miniCart ? "45px" : "24px")};
  margin-right: 12px;
  border: 1px solid #1d1f22;
  display: inline-block;

  label span {
    z-index: 1;
    font-weight: 400;
    font-size: ${(props) => (!props.miniCart ? "16px" : "9px")};
    font-family: "Source Sans Pro";
    letter-spacing: 0.05em;
  }

  label {
    background: #fff no-repeat center center;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 100%;
    height: 100%;
    white-space: nowrap;
  }

  label input[type="radio"] {
    all: unset;
    position: absolute;
    width: 100%;
    height: 100%;
  }

  label input[type="radio"]:checked {
    background-color: black;

    span {
      color: red;
    }
  }

  label input[type="radio"]:checked + span {
    color: #ffffff;
  }
`;

export const RadioColor = styled.div`
  border: 1px solid #ccc;
  box-sizing: border-box;
  position: relative;
  width: ${(props) => (!props.miniCart ? "32px" : "16px")};
  height: ${(props) => (!props.miniCart ? "32px" : "16px")};
  margin-right: 12px;
  display: inline-block;
  border: none;
  background-color: ${(props) => props.color};

  label span {
    z-index: 1;
    font-weight: 400;
    font-size: 16px;
    font-family: "Source Sans Pro";
  }

  label {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 100%;
    height: 100%;
    white-space: nowrap;
  }

  label input[type="radio"] {
    all: unset;
    position: absolute;
    width: 100%;
    height: 100%;
  }

  label input[type="radio"]:checked {
    outline: 1px solid #5ece7b;
    outline-offset: 2px;
  }
`;

export const AttributeColor = styled.input``;

export const ProductPrice = styled.h2`
  font-weight: 700;
  font-size: 24px;
`;

export const Button = styled.button`
  align-items: center;
  text-align: center;
  text-transform: uppercase;
  padding: 16px 32px;
  outline: none;
  border: none;
  cursor: pointer;
  margin-bottom: 40px;
  width: 292px;
  height: 52px;
  color: white;
  background: var(--actionButtons);
  font-weight: 600;
  font-size: 16px;
`;

export const DescriptionProduct = styled.div`
  width: 292px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
`;

export const ProductInfoContainer = styled.div`
  width: 30%;
  padding-top: 80px;

  @media (max-width: 700px) {
    width: 100%;
    margin: 20px;
  }
`;

export const Error = styled.div`
  font-weight: 600;
  font-size: 15px;
  padding: 20px;
  border-radius: 3px;
  margin: 10px 80px 10px 0px;
  color: #fff;
  background-color: #ed5565;
`;
