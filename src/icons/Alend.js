import React from "react";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";

const SvgAlend = props => (
  <Svg width={40} height={40} fill="none" viewBox="0 0 40 40" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20z"
      fill="url(#alend_svg__paint0_linear)"
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
      fill="url(#alend_svg__paint1_linear)"
    />
    <Path
      d="M26.4 11.218L24.619 9.44l-5.947 5.946 5.946 5.95 1.782-1.782-4.168-4.168 4.168-4.168zM21.328 24.617l-5.946-5.95L13.6 20.45l4.168 4.168-4.168 4.168 1.782 1.779 5.946-5.947zM17.912 16.14l5.948 5.947-1.773 1.773-5.948-5.948 1.773-1.773z"
      fill="#fff"
    />
    <Defs>
      <LinearGradient
        id="alend_svg__paint0_linear"
        x1={36.28}
        y1={9.08}
        x2={6.52}
        y2={34.12}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#B6509E" />
        <Stop offset={1} stopColor="#2EBAC6" />
      </LinearGradient>
      <LinearGradient
        id="alend_svg__paint1_linear"
        x1={4}
        y1={20}
        x2={36}
        y2={20}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#01AEC9" />
        <Stop offset={1} stopColor="#1E8FCA" />
      </LinearGradient>
    </Defs>
  </Svg>
);

export default SvgAlend;
