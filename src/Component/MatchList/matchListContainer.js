// 매치리스트 컨트롤러
// 전체 솔랭, 자랭 구분 상태관리 필요
// presenter 전달 파라미터 - 승, 패, 승률, 모스트 챔피언, 선호 포지션
// 하위 컴포넌트 - 계획 추가적으로 필요
//
import React, { useState } from "react";
import { matchesFetch } from "./matchListQueries";
import MatchListPresenter from "./matchListPresenter";

const MatchListContainer = ({ name }) => {
  const [rankTab, setRankTab] = useState("all");
  /*
   * 현재 선택된 탭 지정
   */
  const [matches, setMatches] = useState();
  /**
   * match 데이터 상태 저장
   */
  const [newName, setNewName] = useState("");
  const [loading, setLoading] = useState(false);

  const matchFetch = (name) => {
    matchesFetch(name).then((matches) => {
      setMatches(matches);
      setNewName(name);
      if (loading === false) {
        setLoading(true);
      }
    });
  };

  if (matches === "" || name !== newName) {
    matchFetch(name);
  }
  /**
   * 새로 들어온 닉네임과 기존에 보여주고 있던 닉네임이 다를경우 ( 새로운 검색어를 입력한 경우 )
   * matches가 비어있는 경우( 맨 처음 검색을 시작한 경우 )
   */
  return (
    <MatchListPresenter
      name={name}
      matches={matches}
      rankTab={rankTab}
      setRankTab={setRankTab}
      loading={loading}
    />
  );
};
export default MatchListContainer;
