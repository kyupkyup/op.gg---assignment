// 과거 시즌 데이터 show 컴포넌트

import React from "react";
import styled from "styled-components";
import propTypes from "prop-types";

const Container = styled.div`
  min-width: 60px;
  margin: 3px;

  width: auto;
  height: 20px;
  border-radius: 2px;
  border: solid 1px #d0d3d4;
  background-color: #e0e3e3;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Season = styled.div`
  margin-right: 3px;
  font-family: Helvetica;
  font-size: 11px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.42px;
  color: #657070;
`;

const Tier = styled.div`
  font-family: Helvetica;
  font-size: 11px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.42px;
  color: #657070;
`;

const PreviousSeason = ({ season, tier }) => {
  return (
    <Container>
      <Season>{"S" + season}</Season>
      <Tier>{tier}</Tier>
    </Container>
  );
};
export default PreviousSeason;
