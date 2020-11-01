import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgBat = props => (
  <Svg width={40} height={40} fill="none" viewBox="0 0 40 40" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20z"
      fill="#FF5000"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20.061 7.6L8 28l24-.028L20.061 7.6zM15.103 24l4.93-8.144 4.952 8.143h-9.882z"
      fill="#fff"
    />
  </Svg>
);

export default SvgBat;
