import styled from "styled-components";

export const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50px;
  color: ${({ theme }) => theme.main};
`;
