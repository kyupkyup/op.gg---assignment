/**
 * 모스트 리스트 각 세부 컴포넌트
 */

import React from "react";
import styled from "styled-components";
import ImageMark from "../../ImageMark";

const Container = styled.div`
  width: 100%;
  height: 53px;
  display: flex;
  flex-direction: row;
  padding-top: 5px;
`;
const ChampionPart = styled.div`
  display: inline-flex;
  width: 90px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

const WinRatePart = styled.div`
  display: inline-flex;
  width: 40px;
  flex-direction: column;
  justify-content: center;
`;
const BarPart = styled.div`
  display: inline-flex;
  width: 100px;
  flex-direction: column;
  justify-content: center;
`;
const Name = styled.div`
  font-family: AppleSDGothicNeo;
  font-size: 12px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #5e5e5e;
`;

const WinRate = styled.div`
  font-family: Helvetica;
  font-size: 13px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #879292;
`;
const RateBar = styled.div`
  width: 100px;
  height: 24px;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  padding: 4px;
  ${(props) => {
    console.log(props.winRate);
    return (
      "background: linear-gradient(to right, #1f8ecd " +
      String(props.winRate) +
      "%, #ee5a52 " +
      String(props.winRate) +
      "%);"
    );
  }}
`;
const Win = styled.div`
  font-family: Helvetica;
  font-size: 12px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
`;
const Lose = styled.div`
  font-family: Helvetica;
  font-size: 12px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
`;

const MostListSection = ({ imageUrl, name, losses, wins, winRate, games }) => {
  return (
    <Container>
      <ImageMark url={imageUrl} width={"45px"} height={"45px"} circle={true} />
      <ChampionPart>
        <Name>{name}</Name>
      </ChampionPart>
      <WinRatePart>
        <WinRate>{winRate + "%"}</WinRate>
      </WinRatePart>
      <BarPart>
        <RateBar winRate={winRate}>
          {" "}
          <Win>{wins + "승"}</Win>
          <Lose>{losses + "패"}</Lose>
        </RateBar>
      </BarPart>
    </Container>
  );
};

export default MostListSection;
