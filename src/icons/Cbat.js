import React from "react";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";

const SvgCbat = props => (
  <Svg width={40} height={40} fill="none" viewBox="0 0 40 40" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20z"
      fill="url(#cbat_svg__paint0_linear)"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20.061 7.5L8 27.9l24-.028L20.061 7.5zm-4.958 16.4l4.93-8.144 4.952 8.143h-9.882z"
      fill="#fff"
    />
    <Defs>
      <LinearGradient
        id="cbat_svg__paint0_linear"
        x1={0}
        y1={0}
        x2={0}
        y2={40}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#02D396" />
        <Stop offset={1} stopColor="#9669ED" />
      </LinearGradient>
    </Defs>
  </Svg>
);

export default SvgCbat;
