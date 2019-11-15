import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgLpt = props => (
  <Svg width={40} height={40} fill="none" viewBox="0 0 32 32" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20z"
      fill="#03EB88"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.5 26.315V30h3.685v-3.685H11.5zm0-8.632v3.685h3.685v-3.685H11.5zm16.255 0v3.685h3.685v-3.685h-3.685zM11.5 12.685V9h3.685v3.685H11.5zm8.127 4.341v-3.685h3.686v3.685h-3.686zm0 4.998v3.685h3.686v-3.685h-3.686z"
      fill="#fff"
    />
  </Svg>
);

export default SvgLpt;
