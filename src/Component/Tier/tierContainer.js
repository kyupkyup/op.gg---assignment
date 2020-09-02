// 티어 컴포넌트 컨트롤러
// 전달 변수 : 티어 이미지, 티어, 모스트 포지션, 총 게임수 , LP , 승/패 수, 승률

import React from "react";
import propTypes from "prop-types";

import TierPresenter from "./tierPresenter";
const TierContainer = () => {
  return <TierPresenter></TierPresenter>;
};

export default TierContainer;
