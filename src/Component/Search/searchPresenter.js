// 서치 뷰
// 검색 창에 input 입력 - 특별히 제한된 값은 없음
// 기존 롤 아이디가 한글은 8자 제한이므로 이런 제한사항을 주는것은 가능
import React, { useState } from "react";
import styled from "styled-components";
import Main from "../Main";
import SearchList from "../SearchList";
import SearchInput from "./searchInput";

const Container = styled.div``;
const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  background-color: #1ea1f7;
  justify-content: center;
`;
const Header = styled.div`
  width: 1200px;
  height: 97px;
`;
const SearchContainer = styled.div`
  width: 300px;
  height: auto;
  float: right;
  margin-top: 53px;
`;

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export default ({
  clickSearch,
  searchWord,
  type_search_word,
  summoner_info,
  searchListState,
  setSearchListState,
  clickInput,
  listClick,
  listClickSearch,
}) => {
  // Main 컴포넌트로 summoner 객체 전달
  return (
    <Container>
      {/* 서치 부분 구현 */}
      <HeaderContainer>
        <Header>
          <SearchContainer>
            <SearchInput
              onKeyPress={clickSearch}
              onChange={type_search_word}
              onClick={() => clickInput()}
            ></SearchInput>
            <SearchList
              searchListState={searchListState}
              searchWord={searchWord}
              listClick={listClick}
              listClickSearch={listClickSearch}
            />
          </SearchContainer>{" "}
        </Header>
      </HeaderContainer>
      {/* 하위 컴포넌트  */}
      <MainContainer>
        <Main summoner_info={summoner_info} />
      </MainContainer>
    </Container>
  );
};
