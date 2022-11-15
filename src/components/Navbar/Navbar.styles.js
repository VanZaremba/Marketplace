import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 0 100px;
  justify-content: space-between;
  height: ${(props) => (props.extendNavBar ? "100vh" : "80px")};
  position: fixed;
  background-color: #fff;
  z-index: 10;
  @media (max-width: 700px) {
    padding: 0;
  }
`;

export const NavbarCategoriesMenu = styled.div`
  display: flex;

  @media (max-width: 700px) {
    display: none;
  }
`;

export const NavbarCategory = styled(Link)`
  font-family: "Raleway";
  font-weight: 400;
  font-size: 16px;
  line-height: 120%;
  color: var(--textBody);
  cursor: pointer;
  width: 100px;
  height: 80px;
  display: flex;
  margin-right: 2px;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  text-decoration: none;
`;

export const NavbarLogo = styled.div`
  display: flex;
  align-items: center;
  margin-left: -100px;

  @media (max-width: 700px) {
    display: none;
  }
`;

export const NavbarCartMenu = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 700px) {
    margin-right: 40px;
  }
`;

export const CurrencySelect = styled.ul`
  top: 70px;
  list-style: none;
  width: 100px;
`;

export const Currency = styled.li`
  font-size: 18px;
  padding-left: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  cursor: pointer;

  :hover {
    background-color: #eee;
  }
`;

export const CurrencyContainer = styled.div`
  display: ${(props) => (props.show ? "none" : "")};
  position: absolute;
  top: 65px;
  box-shadow: 0px 2px 35px rgba(168, 172, 176, 0.19);
  background-color: white;
  z-index: 4;
`;

export const ArrowIcon = styled.div`
  font-size: 12x;
  width: 12px;
  margin: 0 10px;
  cursor: pointer;
`;

export const Icon = styled.div`
  margin-left: 22px;
  position: relative;

  :hover {
    cursor: pointer;
  }
`;

export const TotalItems = styled.div`
  background-color: black;
  position: absolute;
  width: 22px;
  height: 22px;
  color: white;
  font-size: 12px;
  font-family: "Roboto";
  font-weight: 700;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  top: -90%;
  right: -100%;
`;

export const OpenLinksButton = styled.button`
  background: none;
  border: none;
  padding: 0px;
  color: black;
  font-size: 3rem;
  align-items: center;
  width: 20%;

  @media (min-width: 700px) {
    display: none;
  }
`;

export const NavBarExtendedContainer = styled.div`
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  position: absolute;
  width: 100%;
  height: 100vh;
  z-index: 3;

  @media (min-width: 700px) {
    display: none;
  }
`;

export const NavBarLinkExtended = styled(Link)`
  font-size: x-large;
  text-decoration: none;
  margin: 1rem;
  text-transform: uppercase;
  color: var(--textBody);
`;
