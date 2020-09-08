// 매치리스트 뷰
// 전체 솔랭, 자랭 구분 상태관리 필요
// 전달받는 파라미터 - 승, 패, 승률, 모스트 챔피언, 선호 포지션

import React from "react";
import styled from "styled-components";
import Match from "../Match";
import Champion from "./summary/champion";
import Position from "./summary/position";
const Container = styled.div`
  width: 700px;
  height: auto;
  diplay: inline-block;
  margin-left: 20px;
`;
const MatchTab = styled.div`
  display: flex;
`;
const Tab = styled.div`
  width: 100%;
  height: 36px;
  border: solid 1px #cdd2d2;
  background-color: #f2f2f2;
`;
const TabAll = styled.div`
  width: 70px;
  height: 34px;
  display: inline-flex;
  justify-content: center;
  align-items: center;

  ${(props) => {
    if (props.rankTab === "all") {
      return "  font-family: NanumBarunGothicOTF;font-size: 12px;font-weight: bold;font-stretch: normal;font-style: normal;line-height: normal;letter-spacing: normal;color: #1f8ecd;border-bottom:2px solid #1f8ecd;";
    } else {
      return "  font-family: NanumBarunGothicOTF;font-size: 12px;font-weight: normal;font-stretch: normal;font-style: normal;line-height: normal;letter-spacing: normal;color: #555555;";
    }
  }}
`;
const TabSolo = styled.div`
  width: 70px;
  height: 34px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  ${(props) => {
    if (props.rankTab === "solo") {
      return "  font-family: NanumBarunGothicOTF;font-size: 12px;font-weight: bold;font-stretch: normal;font-style: normal;line-height: normal;letter-spacing: normal;color: #1f8ecd;border-bottom:2px solid #1f8ecd;";
    } else {
      return "  font-family: NanumBarunGothicOTF;font-size: 12px;font-weight: normal;font-stretch: normal;font-style: normal;line-height: normal;letter-spacing: normal;color: #555555;";
    }
  }}
`;
const TabFree = styled.div`
  width: 70px;
  height: 34px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  ${(props) => {
    if (props.rankTab === "free") {
      return "  font-family: NanumBarunGothicOTF;font-size: 12px;font-weight: bold;font-stretch: normal;font-style: normal;line-height: normal;letter-spacing: normal;color: #1f8ecd;border-bottom:2px solid #1f8ecd;";
    } else {
      return "  font-family: NanumBarunGothicOTF;font-size: 12px;font-weight: normal;font-stretch: normal;font-style: normal;line-height: normal;letter-spacing: normal;color: #555555;";
    }
  }}
`;
const MatchSummary = styled.div`
  width: 100%;
  height: 158px;
  border-radius: 2px;
  border: solid 1px #cdd2d2;
  background-color: #ededed;
  display: flex;
  flex-direction: row;
`;

const MatchList = styled.div``;

const WinRateSummary = styled.div`
  width: 39%;
  height: 158px;
  border-right: solid 1px #cdd2d2;
  display: flex;
  flex-direction: row;
`;
const ChampionsSummary = styled.div`
  width: 34%;
  height: 158px;
  border-right: solid 1px #cdd2d2;
  display: inline-flex;
  flex-direction: column;
`;
const PositionSummary = styled.div`
  width: 24%;
  height: 158px;
  display: inline-flex;
  flex-direction: column;
  padding-left: 20px;
`;
const WinRateSummaryChart = styled.div`
  width: 50%;
  display: inline-block;
`;
const WinRateSummaryChartData = styled.div`
  height: 40px;
  font-family: Helvetica;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #666666;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const WinRateSummaryChartImage = styled.div`
  position: relative;
  width: 90px;
  height: 90px;
  margin: auto;
  ${(props) => {
    return (
      "background: conic-gradient(#1f8ecd " +
      String(props.prop) +
      "%, #ee5a52 " +
      String(props.prop) +
      "%);"
    );
  }}
  border-radius: 50%;
`;
const ChartMiddle = styled.div`
  position: absolute;
  width: 64px;
  height: 64px;
  background-color: #ededed;
  border-radius: 50%;
  top: 13px;
  left: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Helvetica;
  font-size: 14px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #555555;
`;

const WinRateSummaryDataContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const WinRateSummaryDataKDA = styled.div`
  font-family: Helvetica;
  font-size: 11px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #333333;
`;
const WinRateSummaryDataKDAPercent = styled.div`
  font-family: Helvetica;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  ${(props) => {
    if (props.kda >= 3.0 && props.kda < 4.0) {
      return "color: #2daf7f;";
    } else if (props.kda >= 4.0 && props.kda < 5.0) {
      return "color:#1f8ecd;";
    } else if (props.kda >= 5.0) {
      return "color:#e19205;";
    } else {
      return "color:#5e5e5e;";
    }
  }}
`;
const PreferedPosition = styled.div`
  font-family: NanumBarunGothicOTF;
  font-size: 12px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #666666;
  padding-right: 30px;
  padding-top: 10px;
`;
const EachPreferedPosition = styled.div`
  display: flex;
  flex-direction: column;
`;

export default ({ name, matches, rankTab, setRankTab, loading }) => {
  if (loading === true) {
    return (
      <Container>
        <MatchTab>
          <Tab>
            <TabAll rankTab={rankTab} onClick={() => setRankTab("all")}>
              전체
            </TabAll>
            <TabSolo rankTab={rankTab} onClick={() => setRankTab("solo")}>
              솔로게임
            </TabSolo>
            <TabFree rankTab={rankTab} onClick={() => setRankTab("free")}>
              자유랭크
            </TabFree>
          </Tab>
        </MatchTab>
        <MatchSummary>
          <WinRateSummary>
            <WinRateSummaryChart>
              <WinRateSummaryChartData>
                {matches.summary.losses +
                  matches.summary.wins +
                  "전 " +
                  matches.summary.wins +
                  "승 " +
                  matches.summary.losses +
                  "패"}
              </WinRateSummaryChartData>
              <WinRateSummaryChartImage
                prop={Math.round(
                  (matches.summary.wins /
                    (matches.summary.losses + matches.summary.wins)) *
                    100
                )}
              >
                <ChartMiddle>
                  {Math.round(
                    (matches.summary.wins /
                      (matches.summary.losses + matches.summary.wins)) *
                      100
                  ) + "%"}
                </ChartMiddle>
              </WinRateSummaryChartImage>
            </WinRateSummaryChart>
            <WinRateSummaryDataContainer>
              <WinRateSummaryDataKDA>
                {matches.summary.kills +
                  " / " +
                  matches.summary.deaths +
                  " / " +
                  matches.summary.assists}
              </WinRateSummaryDataKDA>
              <WinRateSummaryDataKDAPercent
                kda={
                  Math.round(
                    ((matches.summary.kills + matches.summary.assists) /
                      matches.summary.deaths) *
                      100
                  ) / 100
                }
              >
                {Math.round(
                  ((matches.summary.kills + matches.summary.assists) /
                    matches.summary.deaths) *
                    100
                ) /
                  100 +
                  ":1 "}
              </WinRateSummaryDataKDAPercent>
            </WinRateSummaryDataContainer>
          </WinRateSummary>
          <ChampionsSummary>
            {matches.champions.map((game) => {
              return (
                <Champion
                  data={true}
                  imageUrl={game.imageUrl}
                  name={game.name}
                  wins={game.wins}
                  losses={game.losses}
                  kda={
                    Math.round(
                      ((game.kills + game.assists) / game.deaths) * 100
                    ) / 100
                  }
                />
              );
            })}
          </ChampionsSummary>
          <PositionSummary>
            <PreferedPosition>선호 포지션</PreferedPosition>
            <EachPreferedPosition>
              {matches.positions.map((pos) => {
                return (
                  <Position
                    position={pos.position}
                    games={pos.games}
                    wins={pos.wins}
                  />
                );
              })}
            </EachPreferedPosition>
          </PositionSummary>
        </MatchSummary>
        <MatchList>
          {matches.games.map((game) => {
            return (
              <Match
                name={name}
                rankTab={rankTab}
                champion={game.champion}
                gameId={game.gameId}
                gameLength={game.gameLength}
                gameType={game.gameType}
                isWin={game.isWin}
                items={game.items}
                rune={game.peak}
                spells={game.spells}
                stats={game.stats}
                createDate={game.createDate}
              />
            );
          })}
        </MatchList>
      </Container>
    );
  } else {
    return <Container>로딩 중.</Container>;
  }
};
