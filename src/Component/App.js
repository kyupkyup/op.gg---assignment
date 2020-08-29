import React from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "../Styles/GlobalStyles";
import Theme from "../Styles/Theme";
import Search from "./Component/MatchList";

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  overflow-y: auto;
  margin: 0 auto;
`;

export default () => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Wrapper>
        <Search />
      </Wrapper>
    </ThemeProvider>
  );
};
