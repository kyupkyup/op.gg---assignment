/**
 * 매치리스트 summary 챔피언 컴포넌트
 */

import React from "react";
import styled from "styled-components";
import ImageMark from "../../ImageMark";

const Container = styled.div`
  width: 100%;
  height: 34px;
  display: flex;
  flex-direction: row;
  margin: 8px;
`;
const ImageContainer = styled.div`
  display: flex;
  width: 34px;
  height: 34px;
  border-radius: 50%;
`;

const ChampionPart = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
`;
const Name = styled.div`
  padding-left: 20px;
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
  display: flex;
  flex-direction: row;
  padding-left: 20px;
`;
const WinRatePercent = styled.div`
  font-family: Helvetica;
  font-size: 12px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #555555;
  padding-top: 1px;
`;
const WinRateElse = styled.div`
  font-family: Helvetica;
  font-size: 11px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  padding-left: 2px;
  ${(props) => {
    if (props.kda >= 6.0) {
      return "color:#e19205;";
    } else {
      return "color:#555555;";
    }
  }}
`;

const Champion = ({ data = false, imageUrl, name, wins, losses, kda }) => {
  if (data === true) {
    return (
      <Container>
        <ImageContainer>
          <ImageMark
            url={imageUrl}
            width={"34px"}
            height={"34px"}
            circle={true}
          />
        </ImageContainer>

        <ChampionPart>
          <Name>{name}</Name>
          <WinRate>
            <WinRatePercent>
              {"" + Math.round((wins / (wins + losses)) * 100) + "%"}
            </WinRatePercent>
            <WinRateElse kda={kda}>
              {"  (" + wins + "승 " + losses + "패) | " + kda + "평점"}
            </WinRateElse>
          </WinRate>
        </ChampionPart>
      </Container>
    );
  } else {
    return <Container>챔피언 정보가 없습니다.</Container>;
  }
};

export default Champion;
