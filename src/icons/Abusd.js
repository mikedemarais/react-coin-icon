import React from "react";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";

const SvgAbusd = props => (
  <Svg width={40} height={40} fill="none" viewBox="0 0 40 40" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20z"
      fill="url(#abusd_svg__paint0_linear)"
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
      fill="#F0B90B"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.19 15.936l6.817-6.816 2.717 2.718-6.816 6.816-2.717-2.718zm.005 8.145l10.893-10.893 2.718 2.718L15.913 26.8l-2.718-2.718zm14.967-6.811L17.27 28.163l2.718 2.717L30.88 19.988l-2.718-2.718zM9.12 20.006l2.718-2.718 2.718 2.718-2.718 2.718-2.718-2.718z"
      fill="#fff"
    />
    <Defs>
      <LinearGradient
        id="abusd_svg__paint0_linear"
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

export default SvgAbusd;
