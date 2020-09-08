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
`;
const ImageContainer = styled.div`
  display: flex;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  padding: 2px;
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
const KDAPart = styled.div`
  display: inline-flex;
  width: 100px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const WinRatePart = styled.div`
  display: inline-flex;
  width: 40px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
const CS = styled.div`
  font-family: Helvetica;
  font-size: 11px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #879292;
`;
const KDA = styled.div`
  font-family: Helvetica;
  font-size: 13px;
  font-weight: bold;
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
const KDADetail = styled.div`
  font-family: Helvetica;
  font-size: 11px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #879292;
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
  ${(props) => {
    if (props.winRate >= 60.0) {
      return "color:#c6443e;";
    } else {
      return "color:#5e5e5e;";
    }
  }}
`;
const Games = styled.div`
  font-family: Helvetica;
  font-size: 11px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #879292;
`;

const MostListSection = ({
  imageUrl,
  name,
  cs,
  kills,
  deaths,
  assists,
  winRate,
  games,
}) => {
  return (
    <Container>
      <ImageContainer>
        <ImageMark
          url={imageUrl}
          width={"45px"}
          height={"45px"}
          circle={true}
        />
      </ImageContainer>

      <ChampionPart>
        <Name>{name}</Name>
        <CS>{"CS " + cs}</CS>
      </ChampionPart>
      <KDAPart>
        <KDA kda={Math.round(((kills + assists) / deaths) * 100) / 100}>
          {Math.round(((kills + assists) / deaths) * 100) / 100 + ":1 평점"}
        </KDA>
        <KDADetail>{kills + " / " + deaths + " / " + assists}</KDADetail>
      </KDAPart>
      <WinRatePart>
        <WinRate winRate={winRate}>{winRate + "%"}</WinRate>
        <Games>{games + " 게임"}</Games>
      </WinRatePart>
    </Container>
  );
};

export default MostListSection;
