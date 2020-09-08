// 티어 컴포넌트 컨트롤러
// 전달 변수 : 티어 이미지, 티어, 모스트 포지션, 총 게임수 , LP , 승/패 수, 승률

import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";
import TierBridge from "./tierBridge";

const TierContainer = ({ leagues }) => {
  return <TierBridge leagues={leagues} />;
};

export default TierContainer;
