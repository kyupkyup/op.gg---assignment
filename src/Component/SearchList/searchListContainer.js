// 최근 검색 리스트 컨트롤러
// -input이 비어있을 경우 : localStorage에서 최근 리스트를 불러와서 뷰에 던져주도록
// -input에 입력되면 display:none
/* 변수 입력 리스트 컨트롤러
 * - input 파라미터 전달 값으로 api 실행
 *
 */
// 전달 변수 : 소환사 이름
//

import React from "react";
import SearchListPresenter from "./searchListPresenter";

const SearchListContainer = ({
  searchListState,
  searchWord,
  listClick,
  listClickSearch,
}) => {
  let localSearchWords = JSON.parse(localStorage.getItem("search")) || [];
  return (
    <SearchListPresenter
      searchListState={searchListState}
      searchWord={searchWord}
      listClick={listClick}
      localSearchWords={localSearchWords}
      listClickSearch={listClickSearch}
    />
  );
};

export default SearchListContainer;
