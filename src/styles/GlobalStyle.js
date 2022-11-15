import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #fff;
    --actionButtons: #5ECE7B;
    --textBody: #1D1F22;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    font-family: 'Raleway', sans-serif;
  }

  .loading{
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 1000;
    background-color: #000;
    opacity: 0.5;
    width: 100%;
    height: 100%;
    font-size: 100px;
    color: #fff;
  }

  ::-webkit-scrollbar {
  width: 3px;
  height: 3px;
}

  ::-webkit-scrollbar-track {
    background: transparent;
    padding: 1px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #d3d3d3;
  }

`;
