// 매치리스트 모델
// 전체 솔랭, 자랭 구분 상태관리 필요
// presenter 전달 파라미터 - 승, 패, 승률, 모스트 챔피언, 선호 포지션
const fetch = require("node-fetch");

export const matchesFetch = async (searchWord) => {
  const res = await fetch(
    "https://codingtest.op.gg/api/summoner/" + searchWord + "/matches"
  );

  const matches = await res.json();
  console.log(matches);
  return matches;
};
