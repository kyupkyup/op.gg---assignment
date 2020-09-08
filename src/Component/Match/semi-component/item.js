import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import items from "../../../utils/item.json";
const Container = styled.div`
  position: relative;
  display: inline-block;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-image: url(${(props) => props.url});
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: ${(props) => {
    if (props.circle === true) {
      return "50%;";
    }
  }};
`;
const ItemDetail = styled.div`
  position: absolute;
  width: auto;
  height: auto;
  max-width: 300px;
  min-width: 150px;
  max-height: 300px;
  min-height: 80px;
  background-color: #222727;
  bottom: 30px;
  padding: 5px;
  overflow: hidden;
  ${(props) => {
    console.log(props.mouse);
    if (props.mouse === true) {
      return "display:flex;";
    } else if (props.mouse === false) {
      return "display:none;";
    }
  }}
  font-family: AppleSDGothicNeo;
  font-size: 11px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.36;
  letter-spacing: normal;
  color: #ffffff;
`;

const Item = ({ key, width, height, url = "", circle = false }) => {
  let id = parseInt(url.split("item/")[1].substring(0, 4));
  const item = items.data;
  const data = item[id];
  const [mouse, setMouse] = useState(false);

  const onMouseEnter = () => {
    setMouse(true);
  };
  const onMouseLeave = () => {
    setMouse(false);
  };
  return (
    <Container
      key={key}
      width={width}
      height={height}
      url={url}
      circle={circle}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <ItemDetail mouse={mouse}>{data.plaintext}</ItemDetail>
    </Container>
  );
};
//"https://opgg-static.akamaized.net/images/lol/item/3113.png"
Item.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  url: PropTypes.string,
  circle: PropTypes.bool,
};
export default Item;
