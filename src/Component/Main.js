/*
    Main 컴포넌트
    하위 컴포넌트 집합 -> Tier
                      -> Summoner
                      -> WinRate
                      -> WinRateMini
*/

import React from "react";
import styled from "styled-components";
import Summoner from "./Summoner";
import Tier from "./Tier";
import WinRate from "./WinRate";
import MatchList from "./MatchList";

const Container = styled.div`
  width: 1100px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const BottomWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
`;
const Wrapper = styled.div`
  display: inline-block;
  width: 310px;
  height: auto;
`;
const NoneContainer = styled.div`
  width: 1100px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  font-family: AppleSDGothicNeo;
  font-size: 40px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #5e5e5e;
`;

const Main = ({ summoner_info }) => {
  if (summoner_info === "default") {
    return <NoneContainer>이경엽 OP.GG 프론트엔드 과제전형</NoneContainer>;
  } else {
    return (
      <Container>
        <Summoner
          previousTiers={summoner_info.summoner.previousTiers}
          name={summoner_info.summoner.name}
          ladderRank={summoner_info.summoner.ladderRank}
          profileImageUrl={summoner_info.summoner.profileImageUrl}
          level={summoner_info.summoner.level}
        />
        {/* 소환사 컴포넌트 전달 파라미터
                    - 시즌 (summoner_info.summoner.previousTiers 맵핑, season)
                    - 시즌 티어 (summoner_info.summoner.previousTiers 맵핑, tier)
                    - 소환사 이름 (summoner_info.summoner.name)
                    - 래더 랭킹 (summoner_info.summoner.ladderRank.rank & rankPercentTop)
                    - 소환사 이미지 (summoner_info.summoner.profileImageUrl)
                    - 레벨 (summoner_info.summoner.level)
              */}
        <BottomWrapper>
          {" "}
          <Wrapper>
            <Tier leagues={summoner_info.summoner.leagues} />
            {/* 티어 컴포넌트 전달 파라미터
                    - 랭크 (summoner_info.summoner.leagues) = array 형태
                    - 티어 컴포넌트 내의 뷰를 두 개로 구성해서 솔랭, 자랭 구분
              */}
            <WinRate name={summoner_info.summoner.name} />
            {/* 승률 컴포넌트 전달 파라미터
                    - 소환사 이름만 전달  (summoner_info.summoner.name)
                    - 컴포넌트 내에서 fetch api 실행
              */}
          </Wrapper>
          <MatchList name={summoner_info.summoner.name} />
          {/* 매치 리스트  전달 파라미터  
                    - 소환사 이름만 전달  (summoner_info.summoner.name)
                    - 컴포넌트 내에서 fetch api 실행
              */}
        </BottomWrapper>
      </Container>
    );
  }
};

export default Main;
