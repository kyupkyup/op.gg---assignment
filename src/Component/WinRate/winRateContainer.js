// 승률 컴포넌트 컨트롤러
// 챔피언 승률, 촤근 7일간 승률 구분 상태 관리 필요 (default : 챔피언 승률)
// 전달 변수 : 챔피언 리스트(모스트 순으로 정렬)
// 전달 변수(챔피언) : 챔피언 이미지, 챔피언 이름, kda, 승률, CS, 킬/ 데스 / 어시스트, 총 게임 수
//
// 모델 - 소환사 most info api fetch
//        -> 전달 변수 : 소환사 이름
//
import React, { useState } from "react";

import WinRatePresenter from "./winRatePresenter";
import { mostFetch } from "./winRateQueries";

const WinRateContainer = ({ name }) => {
  const [tab, setTab] = useState("champion");
  const [newName, setNewName] = useState("");
  const [loading, setLoading] = useState(false);
  /**
   * 탭 상태 관리 변수
   * default : champion => 챔피언 승률
   * sevenDays : sevenDays => 7일간 랭크 승률
   */
  const [mostInfo, setMostInfo] = useState("");

  /*
   * 쿼리문에서 받아온 데이터 저장
   */
  const mostQuery = (name) => {
    mostFetch(name).then((most) => {
      setMostInfo(most);
      setNewName(name);
      if (loading === false) {
        setLoading(true);
      }
    });
  };
  if (name !== newName || mostInfo === "") {
    /**
     * 새로 들어온 닉네임과 기존에 보여주고 있던 닉네임이 다를경우 ( 새로운 검색어를 입력한 경우 )
     * mostInfo가 비어있는 경우( 맨 처음 검색을 시작한 경우 )
     */
    mostQuery(name);
  }
  return (
    <WinRatePresenter
      mostInfo={mostInfo}
      tab={tab}
      setTab={setTab}
      loading={loading}
    />
  );
};

export default WinRateContainer;
