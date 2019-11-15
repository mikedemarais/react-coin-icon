import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgEth = props => (
  <Svg width={40} height={40} fill="none" viewBox="0 0 40 40" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20z"
      fill="#25292E"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 24.183l-8.3-4.91L20 6.2l8.3 13.072-8.3 4.91zm0 8.616L11.7 21.1l8.3 4.91 8.298-4.91L20 32.8z"
      fill="#fff"
    />
  </Svg>
);

export default SvgEth;
