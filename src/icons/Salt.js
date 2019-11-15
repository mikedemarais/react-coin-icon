import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgSalt = props => (
  <Svg width={40} height={40} fill="none" viewBox="0 0 40 40" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20z"
      fill="#03EBB5"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 28.303L20 7.25l10 21.053H10zm16.11-2.465L20 12.982l-6.11 12.856h12.22z"
      fill="#fff"
    />
  </Svg>
);

export default SvgSalt;
