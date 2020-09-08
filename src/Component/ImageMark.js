import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
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

const ImageMark = ({
  width,
  height,
  url = "https://opgg-static.akamaized.net/images/lol/champion/Viktor.png",
  circle = false,
}) => {
  return <Container width={width} height={height} url={url} circle={circle} />;
};

ImageMark.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  url: PropTypes.string,
  circle: PropTypes.bool,
};
export default ImageMark;
