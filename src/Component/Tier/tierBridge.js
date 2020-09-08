/**
 *  Tier 개별 컴포넌트를 감싸주는 컴포넌트
 *
 */

import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";
import TierPresenter from "./tierPresenter";

const Container = styled.div`
  width: 300px;
  height: auto;
  display: inline-block;
`;
const TierBridge = ({ leagues }) => {
  return (
    <Container>
      {leagues &&
        leagues.map((league) => (
          <TierPresenter
            key={league.tierRank.name}
            name={league.tierRank.name}
            tierImage={league.tierRank.imageUrl}
            division={league.tierRank.division}
            tier={league.tierRank.tier}
            lp={league.tierRank.lp}
            win={league.wins}
            losses={league.losses}
          />
        ))}
    </Container>
  );
};

export default TierBridge;
