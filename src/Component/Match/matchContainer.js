import React, { useState } from "react";
import MatchPresenter from "./matchPresenter";
import { matchDetailFetch } from "./matchQueries";
const MatchContainer = ({
  name,
  rankTab,
  champion,
  gameId,
  gameLength,
  gameType,
  isWin,
  items,
  rune,
  spells,
  stats,
  createDate,
}) => {
  const [newName, setNewName] = useState("");
  const [detail, setDetail] = useState("");
  const [loading, setLoading] = useState(false);
  const matchDetail = (name, gameId) => {
    matchDetailFetch(name, gameId).then((detail) => {
      setDetail(detail);
      setNewName(name);
      if (loading === false) {
        setLoading(true);
      }
    });
  };
  /**
   * detail 데이터 상태 저장
   */

  if (detail === "" || name !== newName) {
    matchDetail(name, gameId);
  }
  const textDecreaser = (text) => {
    if (text.length > 8) {
      text = text.substring(0, 8) + "...";
    }
    return text;
  };

  return (
    <MatchPresenter
      rankTab={rankTab}
      champion={champion}
      gameId={gameId}
      gameLength={gameLength}
      gameType={gameType}
      isWin={isWin}
      items={items}
      rune={rune}
      spells={spells}
      stats={stats}
      createDate={createDate}
      details={detail}
      loading={loading}
      textDecreaser={textDecreaser}
    />
  );
};
export default MatchContainer;
