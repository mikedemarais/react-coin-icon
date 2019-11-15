import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgLrc = props => (
  <Svg width={40} height={40} fill="none" viewBox="0 0 40 40" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20z"
      fill="#005FFF"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.127 30.539V8.25L6.8 23.082l9.327 7.457zM34.8 19.083H23.006l2.515 4-9.142 7.308L34.8 19.154v-.071z"
      fill="#fff"
    />
  </Svg>
);

export default SvgLrc;
