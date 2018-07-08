import React from "react";
import Svg, { G, Circle } from "svgs";

// SVGR has dropped some elements not supported by react-native-svg: image
const Dfn = props => (
  <Svg
    viewBox="0 0 32 32"
    width={32}
    height={32}
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <G fill="none" fillRule="evenodd">
      <Circle fill="#222" cx={16} cy={16} r={16} />
    </G>
  </Svg>
);

export default Dfn;
