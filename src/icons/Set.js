import React from "react";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";

const SvgSet = props => (
  <Svg width={40} height={40} fill="none" viewBox="0 0 40 40" {...props}>
    <Path
      d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20z"
      fill="#3100FF"
    />
    <Path
      d="M28.86 15.662c0-4.895-3.806-8.862-8.5-8.862-4.695 0-8.5 3.968-8.5 8.862s3.805 8.861 8.5 8.861c4.694 0 8.5-3.967 8.5-8.861z"
      fill="url(#set_svg__paint0_linear)"
    />
    <Path
      d="M11.503 23.728c0 4.894 3.806 8.862 8.5 8.862 4.695 0 8.5-3.968 8.5-8.862s-3.805-8.862-8.5-8.862c-4.694 0-8.5 3.968-8.5 8.862z"
      fill="url(#set_svg__paint1_linear)"
    />
    <Defs>
      <LinearGradient
        id="set_svg__paint0_linear"
        x1={11.86}
        y1={15.662}
        x2={28.86}
        y2={15.662}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#fff" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="set_svg__paint1_linear"
        x1={28.503}
        y1={23.728}
        x2={11.503}
        y2={23.728}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#fff" stopOpacity={0} />
      </LinearGradient>
    </Defs>
  </Svg>
);

export default SvgSet;
