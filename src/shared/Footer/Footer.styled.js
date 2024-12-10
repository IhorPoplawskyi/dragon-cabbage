import styled from "styled-components";

export const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80px;
  width: 100%;
  background-color: ${({ theme }) => theme.footer};
  color: ${({ theme }) => theme.main};
  transition: ${({ theme }) => theme.transition};
  & .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: bold;
    width: 100%;
  }
  & .top-side {
    margin-top: 15px;
    display: flex;
    justify-content: center;
    width: 100%;
  }
  & .bot-side {
    margin-top: 15px;
    display: flex;
    justify-content: center;
    letter-spacing: 2px;
    width: 100%;
  }
  & .text-item {
    font-size: 9px;
    padding: 5px;
  }
  & .copyright {
    margin-top: 15px;
    width: 100%;
    font-size: 9px;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 25px;
  }
`;
