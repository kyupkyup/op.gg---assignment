// 검색 컨트롤러
// 최근 검색 구현 - localStorage 사용 -> 검색 시 저장할 수 있어야 함
// 소환사 이름을 파라미터로 모델에서 fetch 할 수 있도록
// fetch 한 내용을 전 컴포넌트에 뿌려줄 수 있어야 함
// fetch 후 rerendering

// 검색 리스트 추가 구현
// 입력이 될 경우 : 입력될 때마다
//               -> 자음만 입력 되면 : 챔피언 api 불러오기
//               -> 글자가 입력 되면 : 입력 될 때마다 그 내용이 속한 소환사 이름 중 4개만 가져옴
// 하위 컴포넌트로 관련 검색어 컴포넌트 구현
/*
    Search -> SearchList
           -> Main Component 구성 -> Summoner
                                  -> Tier
                                  -> WinRate
                                  -> WinRateMini
                                  -> MatchList

*/
import React, { useState } from "react";
import propTypes from "prop-types";
import SearchPresenter from "./searchPresenter";
import useInput from "../../utils/useInput";
import { search, relatedSearchList } from "./searchQueries";

const SearchContainer = () => {
  const [searchListState, setSearchListState] = useState();
  /*
   * 검색어 리스트 show 변수
   * default : "none#!"
   * 빈 검색어 일 경우 : "empty#!"
   * 검색어가 입력 될 경우 : "{검색어 값}"
   */
  const [summoner_info, setSummoner_info] = useState("");
  /**
   * 검색어 상태 입력 (최종 검색어)
   */
  const searchWord = useInput(" ");
  /**
   * 실제 검색어 값 저장 변수
   *
   */
  const type_search_word = (e) => {
    searchWord.setValue(e.target.value);
    relatedSearchList(e.target.value).then((user) => {
      setSearchListState(user);
    });
  };
  /**
   * 검색 시 타이핑 마다 api 호출을 통해 관련 검색어를 불러옴
   */
  const clickSearch = (e) => {
    if (e.keyCode === 0) {
      search(searchWord.value).then((user) => {
        setSummoner_info(user);
      });
    }
  };
  /**
   * search에서 엔터 클릭 시 검색 실행
   *
   */
  //searchQueries 에서 받아온 summoner 객체 전달
  return (
    <SearchPresenter
      clickSearch={clickSearch}
      summoner_info={summoner_info}
      type_search_word={type_search_word}
      searchWord={searchWord}
      searchListState={searchListState}
      setSearchListState={setSearchListState}
    />
  );
};

export default SearchContainer;
