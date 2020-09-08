import React from "react";
import styled from "styled-components";
import Image from "../semi-component/positionImage";
const Container = styled.div`
  display: flex;
  padding-left: 10px;
  margin-top: 20px;
`;
const WinRateContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;
const PositionName = styled.div`
  font-family: NanumBarunGothicOTF;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #333333;
`;
const WinRate = styled.div`
  font-family: Helvetica;
  font-size: 11px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #666666;
`;
const Position = ({ position, games, wins }) => {
  return (
    <Container>
      <Image position={position} />
      <WinRateContainer>
        <PositionName>{position}</PositionName>
        <WinRate>{"승률 " + Math.round((wins / games) * 100) + "%"}</WinRate>
      </WinRateContainer>
    </Container>
  );
};

export default Position;
