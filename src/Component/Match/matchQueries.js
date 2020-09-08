const fetch = require("node-fetch");

export const matchDetailFetch = async (name, gameId) => {
  const res = await fetch(
    "https://codingtest.op.gg/api/summoner/" + name + "/matchDetail/" + gameId
  );

  const detail = await res.json();
  return detail;
};
