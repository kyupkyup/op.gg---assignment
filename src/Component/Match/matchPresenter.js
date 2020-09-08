import React from "react";
import styled from "styled-components";
import ImageMark from "../ImageMark";
import Item from "./semi-component/item";
const NoneContainer = styled.div`
  display: none;
`;

const Container = styled.div`
  width: 690px;
  height: 100px;
  display: flex;
  margin-top: 10px;
  padding: 3px;

  border: solid 1px #c0aba8;
  ${(props) => {
    if (props.isWin === true) {
      return "background-color:#b0ceea";
    } else {
      return "background-color:#d6b5b2";
    }
  }}
`;
/**
 * 솔랭         챔피언이름      스펠   룬    kda       레벨      아이템     같이한 사람
 * 언제했는지                               평점       cs       와드
 * 승패구분
 * 게임시간
 */
const GameContainer = styled.div`
  width: 80px;
  padding-top: 17px;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  margin-right: 5px;
`;
const ChampionContainer = styled.div`
  width: 90px;
  display: flex;
  padding-top: 17px;

  flex-direction: column;
  align-items: center;
`;
const ChampionWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const ChampionName = styled.div`
  display: flex;
  justify-content: center;
  font-family: AppleSDGothicNeo;
  font-size: 11px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.42px;
  color: #555555;
`;
const SpellContainer = styled.div`
  width: 22px;
  display: flex;
  flex-direction: column;
  margin-left: 6px;
`;
const RuneContainer = styled.div`
  width: 22px;
`;
const KDAContainer = styled.div`
  width: 150px;
  padding-top: 17px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
const GameDetailContainer = styled.div`
  width: 80px;
  display: flex;
  flex-direction: column;
  padding-top: 17px;

  align-items: center;
`;
const ItemsContainer = styled.div`
  width: 100px;
  display: flex;
  flex-direction: column;
  padding-top: 10px;

  align-items: center;
`;
const Items = styled.div`
  width: 100px;
  height: 50px;
  display: grid;
  grid-template-columns: 22px 22px 22px 22px;
  grid-template-rows: 22px 22px;
  row-gap: 2px;
  column-gap: 2px;
`;

const PlayersContainer = styled.div`
  width: 80px;
  display: flex;
  flex-direction: column;
  margin-right: 10px;
  margin-left: 10px;
`;
const PlayersContainer2 = styled.div`
  width: 80px;
  display: flex;
  flex-direction: column;
`;
const GameType = styled.div`
  margin-bottom: 5px;
  font-family: AppleSDGothicNeo;
  font-size: 11px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.42px;
  color: #555555;
`;
const CreateDate = styled.div`
  margin-bottom: 5px;

  font-family: AppleSDGothicNeo;
  font-size: 11px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.42px;
  color: #555555;
`;
const IsWin = styled.div`
  margin-bottom: 5px;

  font-family: AppleSDGothicNeo;
  font-size: 11px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.42px;
  color: #d0021b;
`;
const GameLength = styled.div`
  margin-bottom: 5px;
  font-family: AppleSDGothicNeo;
  font-size: 11px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.42px;
  color: #555555;
`;

const KDA = styled.div`
  margin-bottom: 4px;

  font-family: Helvetica;
  font-size: 15px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.58px;
  color: #555e5e;
`;
const KDARate = styled.div`
  margin-bottom: 4px;
  font-family: Helvetica;
  font-size: 11px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.42px;
  color: #333333;
`;
const Level = styled.div`
  font-family: AppleSDGothicNeo;
  font-size: 11px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.42px;
  color: #555e5e;
`;
const CS = styled.div`
  font-family: AppleSDGothicNeo;
  font-size: 11px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.42px;
  color: #555e5e;
`;
const KillRelated = styled.div`
  font-family: AppleSDGothicNeo;
  font-size: 11px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.42px;
  color: #d0021b;
`;
const SightWard = styled.div`
  font-family: AppleSDGothicNeo;
  font-size: 11px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.42px;
  color: #000000;
`;
const VisionWard = styled.div`
  font-family: AppleSDGothicNeo;
  font-size: 11px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.42px;
  color: #000000;
`;
const Mark = styled.div`
  ${(props) => {
    if (props.kill === "") {
      return;
    } else {
      return "width:auto;height: 18px;border-radius: 9px;border: solid 1px #bf3b36;background-color: #ec4f48;";
    }
  }}

  font-family: AppleSDGothicNeo;
  font-size: 10px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.38px;
  color: #ffffff;
`;

const Player = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 3px;
`;
const PlayerName = styled.div`
  width: 50px;
  margin-left: 5px;
  font-family: AppleSDGothicNeo;
  font-size: 11px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.42px;
  color: #555555;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;
export default ({
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
  details,
  loading,
  textDecreaser,
  mouse,
  onMouseEnter,
  onMouseLeave,
}) => {
  if (loading === true) {
    if (rankTab === "solo") {
      if (gameType === "솔랭") {
        return (
          <Container isWin={isWin}>
            <GameContainer>
              <GameType>{gameType}</GameType>
              <CreateDate></CreateDate>
              <IsWin>{isWin ? "승리" : "패배"}</IsWin>
              <GameLength>
                {String(gameLength).substring(0, 2) +
                  "분 " +
                  String(gameLength).substring(2, 4) +
                  "초"}
              </GameLength>
            </GameContainer>
            <ChampionContainer>
              <ChampionWrapper>
                <ImageMark
                  url={champion.imageUrl}
                  width={"45px"}
                  height={"45px"}
                  circle={true}
                />
                <SpellContainer>
                  <ImageMark
                    url={spells[0].imageUrl}
                    width={"22px"}
                    height={"22px"}
                  />
                  <ImageMark
                    url={spells[1].imageUrl}
                    width={"22px"}
                    height={"22px"}
                  />
                </SpellContainer>
                <RuneContainer>
                  <ImageMark url={rune[0]} width={"22px"} height={"22px"} />
                  <ImageMark url={rune[1]} width={"22px"} height={"22px"} />
                </RuneContainer>
              </ChampionWrapper>
              <ChampionName>챔피언이름 변수 없음</ChampionName>
            </ChampionContainer>

            <KDAContainer>
              <KDA>
                {stats.general.kill +
                  " / " +
                  stats.general.death +
                  " / " +
                  stats.general.assist}
              </KDA>
              <KDARate>{stats.general.kdaString + "평점"}</KDARate>
              <Mark kill={stats.general.largestMultiKillString}>
                {stats.general.largestMultiKillString}
              </Mark>
            </KDAContainer>
            <GameDetailContainer>
              <Level>{"레벨 " + champion.level}</Level>
              <CS>
                {stats.general.cs + "(" + stats.general.csPerMin + ") CS"}
              </CS>
              <KillRelated>
                {"킬관여 " + stats.general.contributionForKillRate}
              </KillRelated>
            </GameDetailContainer>
            <ItemsContainer>
              <Items>
                {items.map((item) => {
                  return (
                    <Item
                      key={item.imageUrl}
                      url={item.imageUrl.length > 0 ? item.imageUrl : ""}
                      width={"22px"}
                      height={"22px"}
                    />
                  );
                })}
              </Items>
              <SightWard>
                {"시야 와드" + stats.ward.visionWardsBought}
              </SightWard>
              <VisionWard>
                {"제어 와드" + stats.ward.visionWardsBought}
              </VisionWard>
            </ItemsContainer>
            <PlayersContainer>
              {details.teams[0].players.map((player) => {
                return (
                  <Player>
                    <ImageMark
                      url={player.champion.imageUrl}
                      width={"16px"}
                      height={"16px"}
                    />
                    <PlayerName>{player.summonerName}</PlayerName>
                  </Player>
                );
              })}
            </PlayersContainer>
            <PlayersContainer2>
              {details.teams[1].players.map((player) => {
                return (
                  <Player>
                    <ImageMark
                      url={player.champion.imageUrl}
                      width={"16px"}
                      height={"16px"}
                    />
                    <PlayerName>{player.summonerName}</PlayerName>
                  </Player>
                );
              })}
            </PlayersContainer2>
          </Container>
        );
      } else {
        return <NoneContainer />;
      }
    } else if (rankTab === "free") {
      if (gameType === "자유 5:5 랭크") {
        return (
          <Container isWin={isWin}>
            <GameContainer>
              <GameType>{gameType}</GameType>
              <CreateDate></CreateDate>
              <IsWin>{isWin ? "승리" : "패배"}</IsWin>
              <GameLength>
                {" "}
                {String(gameLength).substring(0, 2) +
                  "분 " +
                  String(gameLength).substring(2, 4) +
                  "초"}
              </GameLength>
            </GameContainer>
            <ChampionContainer>
              <ChampionWrapper>
                <ImageMark
                  url={champion.imageUrl}
                  width={"45px"}
                  height={"45px"}
                  circle={true}
                />
                <SpellContainer>
                  <ImageMark
                    url={spells[0].imageUrl}
                    width={"22px"}
                    height={"22px"}
                  />
                  <ImageMark
                    url={spells[1].imageUrl}
                    width={"22px"}
                    height={"22px"}
                  />
                </SpellContainer>
                <RuneContainer>
                  <ImageMark url={rune[0]} width={"22px"} height={"22px"} />
                  <ImageMark url={rune[1]} width={"22px"} height={"22px"} />
                </RuneContainer>
              </ChampionWrapper>
              <ChampionName>챔피언이름 변수 없음</ChampionName>
            </ChampionContainer>

            <KDAContainer>
              <KDA>
                {stats.general.kill +
                  " / " +
                  stats.general.death +
                  " / " +
                  stats.general.assist}
              </KDA>
              <KDARate>{stats.general.kdaString + "평점"}</KDARate>
              <Mark kill={stats.general.largestMultiKillString}>
                {stats.general.largestMultiKillString}
              </Mark>
            </KDAContainer>
            <GameDetailContainer>
              <Level>{"레벨 " + champion.level}</Level>
              <CS>
                {stats.general.cs + "(" + stats.general.csPerMin + ") CS"}
              </CS>
              <KillRelated>
                {"킬관여 " + stats.general.contributionForKillRate}
              </KillRelated>
            </GameDetailContainer>
            <ItemsContainer>
              <Items>
                {items.map((item) => {
                  return (
                    <Item url={item.imageUrl} width={"22px"} height={"22px"} />
                  );
                })}
              </Items>
              <SightWard>
                {"시야 와드" + stats.ward.visionWardsBought}
              </SightWard>
              <VisionWard>
                {"제어 와드" + stats.ward.visionWardsBought}
              </VisionWard>
            </ItemsContainer>
            <PlayersContainer>
              {details.teams[0].players.map((player) => {
                return (
                  <Player>
                    <ImageMark
                      url={player.champion.imageUrl}
                      width={"16px"}
                      height={"16px"}
                    />
                    <PlayerName>{player.summonerName}</PlayerName>
                  </Player>
                );
              })}
            </PlayersContainer>
            <PlayersContainer2>
              {details.teams[1].players.map((player) => {
                return (
                  <Player>
                    <ImageMark
                      url={player.champion.imageUrl}
                      width={"16px"}
                      height={"16px"}
                    />
                    <PlayerName>{player.summonerName}</PlayerName>
                  </Player>
                );
              })}
            </PlayersContainer2>
          </Container>
        );
      } else {
        return <NoneContainer />;
      }
    } else {
      return (
        <Container isWin={isWin}>
          <GameContainer>
            <GameType>{gameType}</GameType>
            <CreateDate></CreateDate>
            <IsWin>{isWin ? "승리" : "패배"}</IsWin>
            <GameLength>
              {" "}
              {String(gameLength).substring(0, 2) +
                "분 " +
                String(gameLength).substring(2, 4) +
                "초"}
            </GameLength>
          </GameContainer>
          <ChampionContainer>
            <ChampionWrapper>
              <ImageMark
                url={champion.imageUrl}
                width={"45px"}
                height={"45px"}
                circle={true}
              />
              <SpellContainer>
                <ImageMark
                  url={spells[0].imageUrl}
                  width={"22px"}
                  height={"22px"}
                />
                <ImageMark
                  url={spells[1].imageUrl}
                  width={"22px"}
                  height={"22px"}
                />
              </SpellContainer>
              <RuneContainer>
                <ImageMark url={rune[0]} width={"22px"} height={"22px"} />
                <ImageMark url={rune[1]} width={"22px"} height={"22px"} />
              </RuneContainer>
            </ChampionWrapper>
            <ChampionName>챔피언이름 변수 없음</ChampionName>
          </ChampionContainer>

          <KDAContainer>
            <KDA>
              {stats.general.kill +
                " / " +
                stats.general.death +
                " / " +
                stats.general.assist}
            </KDA>
            <KDARate>{stats.general.kdaString + "평점"}</KDARate>
            <Mark kill={stats.general.largestMultiKillString}>
              {stats.general.largestMultiKillString}
            </Mark>
          </KDAContainer>
          <GameDetailContainer>
            <Level>{"레벨 " + champion.level}</Level>
            <CS>{stats.general.cs + "(" + stats.general.csPerMin + ") CS"}</CS>
            <KillRelated>
              {"킬관여 " + stats.general.contributionForKillRate}
            </KillRelated>
          </GameDetailContainer>
          <ItemsContainer>
            <Items>
              {items.map((item) => {
                return (
                  <Item url={item.imageUrl} width={"22px"} height={"22px"} />
                );
              })}
            </Items>
            <SightWard>{"시야 와드" + stats.ward.visionWardsBought}</SightWard>
            <VisionWard>
              {"제어 와드" + stats.ward.visionWardsBought}
            </VisionWard>
          </ItemsContainer>
          <PlayersContainer>
            {details.teams[0].players.map((player) => {
              return (
                <Player>
                  <ImageMark
                    url={player.champion.imageUrl}
                    width={"16px"}
                    height={"16px"}
                  />
                  <PlayerName>{player.summonerName}</PlayerName>
                </Player>
              );
            })}
          </PlayersContainer>
          <PlayersContainer2>
            {details.teams[1].players.map((player) => {
              return (
                <Player>
                  <ImageMark
                    url={player.champion.imageUrl}
                    width={"16px"}
                    height={"16px"}
                  />
                  <PlayerName>{player.summonerName}</PlayerName>
                </Player>
              );
            })}
          </PlayersContainer2>
        </Container>
      );
    }
  } else {
    return <Container>로딩 중.</Container>;
  }
};
