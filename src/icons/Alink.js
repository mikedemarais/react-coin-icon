import React from "react";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";

const SvgAlink = props => (
  <Svg width={40} height={40} fill="none" viewBox="0 0 40 40" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20z"
      fill="url(#alink_svg__paint0_linear)"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 38c9.941 0 18-8.059 18-18S29.941 2 20 2 2 10.059 2 20s8.059 18 18 18z"
      fill="#fff"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 36c8.837 0 16-7.163 16-16S28.837 4 20 4 4 11.163 4 20s7.163 16 16 16z"
      fill="#1A56F0"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.053 10.32L20 9.2l1.947 1.12 5.306 3.066 1.947 1.12v10.611l-1.947 1.12-5.257 3.067-1.947 1.12-1.947-1.12-5.355-3.067-1.947-1.12V14.506l1.947-1.12 5.306-3.066zm-3.359 6.425v6.133L20 25.945l5.306-3.067v-6.133L20 13.678l-5.306 3.067z"
      fill="#fff"
    />
    <Defs>
      <LinearGradient
        id="alink_svg__paint0_linear"
        x1={36.28}
        y1={9.08}
        x2={6.52}
        y2={34.12}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#B6509E" />
        <Stop offset={1} stopColor="#2EBAC6" />
      </LinearGradient>
    </Defs>
  </Svg>
);

export default SvgAlink;
