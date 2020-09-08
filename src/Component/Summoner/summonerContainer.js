// 소환사 정보 컴포넌트 컨트롤러
// 상위 컴포넌트에서 전달받은 객체를 통해
// 뷰에 파라미터 전달
// 전달 변수 : 시즌별 티어, 소환사 이름, 래더 랭킹, 소환사 이미지, 소환사 레벨
import React from "react";

import SummonerPresenter from "./summonerPresenter";
const SummonerContainer = ({
  previousTiers,
  name,
  ladderRank,
  profileImageUrl,
  level,
}) => {
  return (
    <SummonerPresenter
      previousTiers={previousTiers}
      name={name}
      ladderRank={ladderRank}
      profileImageUrl={profileImageUrl}
      level={level}
    />
  );
};

export default SummonerContainer;
