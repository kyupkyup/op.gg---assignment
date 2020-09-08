// 최근 검색 리스트 뷰
// 컨트롤러에서 "소환사 이름" 파라미터 전달 받아 리스트에 뿌려줄 것
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  margin-top: 10px;
  width: 260px;
  height: auto;
  min-height: 30px;
  background-color: white;
  ${(props) => {
    if (props.listClick === true) {
      return "display:flex; flex-direction:column;";
    } else {
      return "display:none;";
    }
  }};
`;
const Title = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Helvetica;
  font-size: 11px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.42px;
  color: #657070;
`;

const Line = styled.div`
  width: 100%;
  height: 20px;
  padding-left: 10px;
  padding: 5px;
  margin: 5px;
  display: flex;
  font-family: Helvetica;
  font-size: 11px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.42px;
  color: #657070;
`;
export default ({
  searchListState,
  searchWord,
  listClick,
  localSearchWords,
  listClickSearch,
}) => {
  return (
    <Container listClick={listClick}>
      <Title>최근 검색</Title>
      {localSearchWords.length > 0
        ? localSearchWords.reverse().map((word) => {
            return <Line onClick={() => listClickSearch(word)}>{word}</Line>;
          })
        : null}
    </Container>
  );
};
