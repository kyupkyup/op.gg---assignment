// 소환사 정보 컴포넌트 뷰
// 전달 변수 : 시즌별 티어, 소환사 이름, 래더 랭킹, 소환사 이미지, 소환사 레벨
import React from "react";
import styled from "styled-components";
import ImageMark from "../ImageMark";
import PreviousSeason from "./PartComponent/previousSeason";
const Container = styled.div`
  width: 100%;
  height: 186px;
  padding-left: 20px;
`;
const SeasonContainer = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  padding-top: 5px;
`;
const SummonerContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
const SummonerInfoContainer = styled.div`
  margin-left: 10px;
`;
const SummonerName = styled.div`
  font-family: AppleSDGothicNeo;
  font-size: 20px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.77px;
  color: #242929;
`;
const SummonerRanking = styled.div`
  font-family: AppleSDGothicNeo;
  font-size: 11px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.42px;
  color: #657070;
`;

export default ({
  previousTiers,
  //   매핑 해야함
  name,
  ladderRank,
  profileImageUrl,
  level,
}) => {
  return (
    <Container>
      <SeasonContainer>
        {previousTiers.map((tier) => {
          return <PreviousSeason season={tier.season} tier={tier.tier} />;
        })}
      </SeasonContainer>
      <SummonerContainer>
        <ImageMark width={"120px"} height={"120px"} url={profileImageUrl} />
        <SummonerInfoContainer>
          <SummonerName>{name}</SummonerName>
          <SummonerRanking>
            {"래더 랭킹" +
              ladderRank.rank +
              "위 (상위 " +
              ladderRank.rankPercentOfTop +
              "%)"}
          </SummonerRanking>
        </SummonerInfoContainer>
      </SummonerContainer>
    </Container>
  );
};
