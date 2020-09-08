/**
 * most챔피언 리스트 컴포넌트
 *
 */
import React from "react";
import styled from "styled-components";
import MostListSection from "./MostListSection";
import MostListSevenDays from "./MostListSevenDays";
const Container = styled.div`
  width: 100%;
  height: auto;
  padding-left: 10px;
`;

const MostList = ({ tab, mostInfo, loading }) => {
  if (loading === true) {
    if (tab === "champion") {
      return (
        <Container>
          {mostInfo.champions
            .sort(function (b, a) {
              return a.games < b.games ? -1 : a.games > b.games ? 1 : 0;
            })
            .map((most) => {
              return (
                <MostListSection
                  key={most.rank}
                  imageUrl={most.imageUrl}
                  name={most.name}
                  cs={most.cs}
                  kills={most.kills}
                  deaths={most.deaths}
                  assists={most.assists}
                  winRate={Math.round((most.wins / most.games) * 100)}
                  games={most.games}
                />
              );
              /**
               * 전달 변수 :
               * 챔피언 이미지,
               * 챔피언 이름
               * cs 개수 (분당 CS)
               * KDA KILL DEATH ASSIST
               * 승률
               * 게임 수
               */
            })}
        </Container>
      );
    } else if (tab === "sevenDays") {
      return (
        <Container>
          {mostInfo.recentWinRate
            .sort(function (b, a) {
              return a.wins + a.losses < b.wins + b.losses
                ? -1
                : a.wins + a.losses > b.wins + b.losses
                ? 1
                : 0;
            })
            .map((most) => {
              return (
                <MostListSevenDays
                  imageUrl={most.imageUrl}
                  losses={most.losses}
                  wins={most.wins}
                  name={most.name}
                  winRate={Math.round(
                    (most.wins / (most.wins + most.losses)) * 100
                  )}
                />
              );
            })}
        </Container>
      );
    }
  } else {
    return <Container>로딩 중</Container>;
  }
};
export default MostList;
