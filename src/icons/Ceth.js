import React from "react";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";

const SvgCeth = props => (
  <Svg width={40} height={40} fill="none" viewBox="0 0 40 40" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20z"
      fill="url(#ceth_svg__paint0_linear)"
    />
    <Path
      d="M11.7 21.101l8.3 4.91 8.298-4.91L20 32.8 11.7 21.1z"
      fill="url(#ceth_svg__paint1_linear)"
    />
    <Path d="M20 24.183l-8.3-4.91L20 6.2l8.3 13.072-8.3 4.91z" fill="#fff" />
    <Defs>
      <LinearGradient
        id="ceth_svg__paint0_linear"
        x1={0}
        y1={0}
        x2={0}
        y2={40}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#02D396" />
        <Stop offset={1} stopColor="#9669ED" />
      </LinearGradient>
      <LinearGradient
        id="ceth_svg__paint1_linear"
        x1={19.999}
        y1={21.101}
        x2={19.999}
        y2={32.799}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#fff" stopOpacity={0.9} />
      </LinearGradient>
    </Defs>
  </Svg>
);

export default SvgCeth;
