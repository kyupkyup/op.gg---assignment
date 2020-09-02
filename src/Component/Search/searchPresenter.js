// 서치 뷰
// 검색 창에 input 입력 - 특별히 제한된 값은 없음
// 기존 롤 아이디가 한글은 8자 제한이므로 이런 제한사항을 주는것은 가능
import React, { useState } from "react";
import styled from "styled-components";
import Main from "../Main";
import SearchList from "../SearchList";
import SearchInput from "./searchInput";

const Container = styled.div``;
const Header = styled.div``;

export default ({
  clickSearch,
  searchWord,
  type_search_word,
  summoner_info,
  searchListState,
  setSearchListState,
}) => {
  // Main 컴포넌트로 summoner 객체 전달
  return (
    <Container>
      {/* 서치 부분 구현 */}
      <Header>
        <SearchInput onKeyPress={clickSearch} onChange={type_search_word} />
        {/* <SearchList searchListState={searchListState} searchWord={searchWord} /> */}
      </Header>
      {/* 하위 컴포넌트  */}
      <Main summoner_info={summoner_info} />
    </Container>
  );
};
