import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgRook = props => (
  <Svg width={40} height={40} fill="none" viewBox="0 0 40 40" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20z"
      fill="#25292E"
    />
    <Path d="M14.3 10.3h-3.8v3.8h3.8v-3.8z" fill="#fff" />
    <Path
      d="M21.9 10.3h-3.8v3.8h-3.8v15.2h11.4V14.1h-3.8v-3.8zm0 11.4h-3.8v-3.8h3.8v3.8zM29.5 10.3h-3.8v3.8h3.8v-3.8z"
      fill="#fff"
    />
  </Svg>
);

export default SvgRook;
