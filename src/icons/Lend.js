import React from "react";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";

const SvgLend = props => (
  <Svg width={40} height={40} fill="none" viewBox="0 0 40 40" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20z"
      fill="url(#lend_svg__paint0_linear)"
    />
    <Path
      d="M28 9.023L25.773 6.8l-7.433 7.433 7.433 7.436L28 19.444l-5.21-5.21L28 9.023zM21.66 25.772l-7.433-7.437L12 20.562l5.21 5.21-5.21 5.21 2.227 2.222 7.433-7.432zM17.39 15.174l7.435 7.435-2.216 2.216-7.435-7.435 2.216-2.216z"
      fill="#fff"
    />
    <Defs>
      <LinearGradient
        id="lend_svg__paint0_linear"
        x1={0}
        y1={20}
        x2={40}
        y2={20}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#01AEC9" />
        <Stop offset={1} stopColor="#1E8FCA" />
      </LinearGradient>
    </Defs>
  </Svg>
);

export default SvgLend;
