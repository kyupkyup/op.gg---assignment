// 검색 모델
// fetch 해서 컨트롤러로 전달
const fetch = require("node-fetch");

export const search = async (searchWord) => {
  const res = await fetch(
    "https://codingtest.op.gg/api/summoner/" + searchWord
  );

  const user = await res.json();
  return user;
};

export const relatedSearchList = async (searchWord) => {
  const res = await fetch(
    "https://codingtest.op.gg/api/summoner/" + searchWord
  );

  const user = await res.json();
  return user.summoner.name;
};
