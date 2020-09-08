import React from "react";
import styled from "styled-components";
import top from "../../../Styles/Images/top.PNG";
import mid from "../../../Styles/Images/mid.PNG";
import sup from "../../../Styles/Images/sup.PNG";
import jun from "../../../Styles/Images/jun.PNG";
import adc from "../../../Styles/Images/adc.PNG";

const Image = styled.div`
  width: 30px;
  height: 30px;
  display: inline-block;
  background-image: url(${(props) => props.url});
  background-size: contain;
  background-repeat: no-repeat;
`;

const PositionImage = ({ position }) => {
  if (position === "TOP") {
    return <Image url={top} />;
  } else if (position === "MID") {
    return <Image url={mid} />;
  } else if (position === "SUP") {
    return <Image url={sup} />;
  } else if (position === "JUN") {
    return <Image url={jun} />;
  } else {
    return <Image url={adc} />;
  }
};

export default PositionImage;
