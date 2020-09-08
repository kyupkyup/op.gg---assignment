// 티어 컴포넌트 뷰
// 전달 변수 : 티어 이미지, 티어, 모스트 포지션, 총 게임수 , LP , 승/패 수, 승률
//
//
import React from "react";
import styled from "styled-components";
import ImageMark from "../ImageMark";
const Container = styled.div`
  width: 300px;
  heigth: auto;
  display: flex;
  flex-direction: row;
  border-radius: 2px;
  border: solid 1px #cdd2d2;
  background-color: #f2f2f2;
  margin-bottom: 8px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Rank = styled.text`
  font-family: AppleSDGothicNeo;
  font-size: 11px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #879292;
`;
const Tier = styled.text`
  font-family: Helvetica;
  font-size: 15px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #1f8ecd;
`;
const LP = styled.text`
  font-family: Helvetica;
  font-size: 12px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #555e5e;
`;

const WinRate = styled.text`
  font-family: Helvetica;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #879292;
`;

export default ({ name, tierImage, division, tier, lp, win, losses }) => {
  return (
    <Container>
      <ImageMark width={"104px"} height={"104px"} url={tierImage} />
      <InfoContainer>
        <Rank>{name}</Rank>
        <Tier>{tier + " " + division.toUpperCase()}</Tier>
        <LP>{lp + "LP" + " / " + win + " 승 " + losses + "패"}</LP>
        <WinRate>
          {"승률  " + Math.round((win / (win + losses)) * 100) + "%"}
        </WinRate>
      </InfoContainer>
    </Container>
  );
};
