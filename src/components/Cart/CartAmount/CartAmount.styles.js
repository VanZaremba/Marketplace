import styled from "styled-components";

export const Text = styled.div`
  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 160%;
  padding-top: 32px;
`;

export const Button = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px 32px;
  width: 279px;
  height: 43px;
  margin-top: 32px;
  margin-bottom: 200px;
  background: var(--actionButtons);
  outline: none;
  border: none;
  cursor: pointer;
  text-transform: uppercase;
  color: white;
`;
