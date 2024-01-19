import styled from "@emotion/styled";

import { contentMaxWidth, MOBILE_MEDIA_QUERY } from "../styles/const";

export const Wrapper = styled.div`
  overflow-y: scroll;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding-bottom: 61px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  word-break: keep-all;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 60px 15px;
  background-color: ${({ theme }) => theme.color.white100};
  box-shadow: 0 0 30px rgb(0 0 0 / 0.1);

  @media ${MOBILE_MEDIA_QUERY} {
    padding-bottom: 50px;
  }
`;

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  max-width: ${contentMaxWidth};
`;
