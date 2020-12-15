import React from "react";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";

const SvgAusdt = props => (
  <Svg width={40} height={40} fill="none" viewBox="0 0 40 40" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20z"
      fill="url(#ausdt_svg__paint0_linear)"
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
      fill="#22A079"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21.975 15.488v2.38h.001c4.416.205 7.736 1.08 7.736 2.129s-3.32 1.924-7.736 2.128v7.625H18.04v-7.625c-4.422-.204-7.75-1.08-7.75-2.13 0-1.05 3.326-1.925 7.75-2.129v-2.378h-5.443v-3.627h14.82v3.627h-5.442zm.001 5.99v.001-.002c3.9-.173 6.812-.855 6.812-1.666 0-.812-2.91-1.493-6.811-1.667v2.658c-.112.01-.723.06-1.936.06-1.01 0-1.743-.043-2-.06v-2.658c-3.907.174-6.825.853-6.825 1.668 0 .814 2.918 1.495 6.826 1.668v-.003c.252.013.966.041 1.982.041 1.27 0 1.841-.034 1.952-.04z"
      fill="#fff"
    />
    <Defs>
      <LinearGradient
        id="ausdt_svg__paint0_linear"
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

export default SvgAusdt;
