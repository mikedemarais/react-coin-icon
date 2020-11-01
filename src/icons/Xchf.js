import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgXchf = props => (
  <Svg width={40} height={40} fill="none" viewBox="0 0 40 40" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20z"
      fill="#CE0E2D"
    />
    <Path
      d="M15.215 19.408l-.732-1.195-3.864 6.326h2.34L22.457 9 33.25 26.667H19.648l-2.267-3.714 1.285-2.099 2.25 3.685h8.465l-6.924-11.335-8.23 13.463H6.75l7.733-12.653 2.016 3.294-1.284 2.1z"
      fill="#fff"
    />
  </Svg>
);

export default SvgXchf;
