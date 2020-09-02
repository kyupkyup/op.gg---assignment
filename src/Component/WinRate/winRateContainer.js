// 승률 컴포넌트 컨트롤러
// 챔피언 승률, 촤근 7일간 승률 구분 상태 관리 필요 (default : 챔피언 승률)
// 전달 변수 : 챔피언 리스트(모스트 순으로 정렬)
// 전달 변수(챔피언) : 챔피언 이미지, 챔피언 이름, kda, 승률, CS, 킬/ 데스 / 어시스트, 총 게임 수
//
// 모델 - 소환사 most info api fetch
//        -> 전달 변수 : 소환사 이름
//
import React from "react";

import WinRatePresenter from "./winRatePresenter";
const WinRateContainer = () => {
  return <WinRatePresenter></WinRatePresenter>;
};

export default WinRateContainer;
