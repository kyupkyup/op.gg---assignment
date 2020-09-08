// 승률 컴포넌트 뷰
// 챔피언 승률, 7일간 랭크 승률에 따른 상태관리
// 전달 변수 : 챔피언 리스트(모스트 순으로 정렬)
// 전달 변수(챔피언) : 챔피언 이미지, 챔피언 이름, kda, 승률, CS, 킬/ 데스 / 어시스트, 총 게임 수
import React from "react";
import styled from "styled-components";
import MostList from "./semi-component/MostList";
import PropTypes from "prop-types";

const Container = styled.div`
  width: 300px;
  height: auto;
  border-radius: 2px;
  border: solid 1px #cdd2d2;
  background-color: #ededed;
  display: inline-block;
`;
const WinRateContainer = styled.div``;
const ButtonChampion = styled.span`
  width: 149px;
  height: 44px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  ${(props) => {
    if (props.tab === "champion") {
      return "font-family: AppleSDGothicNeo; font-size: 12px; font-weight: bold; font-stretch: normal;font-style: normal;line-height: normal;letter-spacing: normal;color: #5e5e5e;";
    } else if (props.tab === "sevenDays") {
      return "font-family: AppleSDGothicNeo;font-size: 12px;font-weight: normal;font-stretch: normal;font-style: normal;line-height: normal;letter-spacing: normal;text-align: center;color: #879292;border: solid 1px #cdd2d2;background-color: #f2f2f2;";
    }
  }}
`;
const ButtonSevenDays = styled.span`
  width: 149px;
  height: 44px;
  display: inline-flex;
  justify-content: center;
  align-items: center;

  ${(props) => {
    if (props.tab === "champion") {
      return "font-family: AppleSDGothicNeo;font-size: 12px;font-weight: normal;font-stretch: normal;font-style: normal;line-height: normal;letter-spacing: normal;text-align: center;color: #879292;border: solid 1px #cdd2d2;background-color: #f2f2f2;";
    } else if (props.tab === "sevenDays") {
      return "font-family: AppleSDGothicNeo; font-size: 12px; font-weight: bold; font-stretch: normal;font-style: normal;line-height: normal;letter-spacing: normal;color: #5e5e5e;";
    }
  }}
`;

const WinRatePresenter = ({ mostInfo, tab, setTab, loading }) => {
  return (
    <Container>
      <WinRateContainer>
        <ButtonChampion
          tab={tab}
          onClick={() => {
            setTab("champion");
          }}
        >
          챔피언 승률
        </ButtonChampion>
        <ButtonSevenDays
          tab={tab}
          onClick={() => {
            setTab("sevenDays");
          }}
        >
          7일간 랭크 승률
        </ButtonSevenDays>
        <>
          <MostList tab={tab} mostInfo={mostInfo} loading={loading} />
        </>
      </WinRateContainer>
    </Container>
  );
};

WinRatePresenter.propTypes = {
  tab: PropTypes.string.isRequired,
  setTab: PropTypes.func.isRequired,
};

export default WinRatePresenter;
