// 승률 컴포넌트 모델
// 모스트 챔피언을 받아오기 위한 모델
// 소환사 most info API 사용
//
const fetch = require("node-fetch");

export const mostFetch = async (name) => {
  const res = await fetch(
    "https://codingtest.op.gg/api/summoner/" + name + "/mostInfo"
  );

  const most = await res.json();
  return most;
};
