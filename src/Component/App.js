import React from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "../Styles/globalStyles";
import Theme from "../Styles/Theme";
import Search from "./Search";

const Wrapper = styled.div`
  width: 100%;
  height: auto;

  overflow-y: auto;
  background-color: #eaeaea;
`;

export default () => {
  return (
    <ThemeProvider theme={Theme}>
      <>
        <GlobalStyles />
        <Wrapper>
          <Search />
        </Wrapper>
      </>
    </ThemeProvider>
  );
};
