import React from "react";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";

const SvgAsnx = props => (
  <Svg width={40} height={40} fill="none" viewBox="0 0 40 40" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20z"
      fill="url(#asnx_svg__paint0_linear)"
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
      fill="#211580"
    />
    <Path
      d="M15.494 16.558a.578.578 0 00-.45-.207h-3.655a.107.107 0 01-.078-.03.093.093 0 01-.031-.068v-2.436c0-.024.01-.046.03-.066.02-.02.047-.031.08-.031h3.86c.975 0 1.815.394 2.521 1.181l.938 1.133-1.826 2.204-1.389-1.68zm6.747-1.669c.706-.78 1.55-1.169 2.533-1.169h3.848c.034 0 .058.008.074.024.016.017.024.04.024.073v2.436a.105.105 0 01-.024.067c-.016.02-.04.03-.074.03H24.97a.577.577 0 00-.45.208l-2.692 3.24 2.704 3.263c.122.13.267.195.438.195h3.653c.034 0 .058.01.074.03.016.021.024.048.024.08v2.436a.105.105 0 01-.024.067c-.016.02-.04.03-.074.03h-3.848c-.982 0-1.822-.394-2.52-1.181l-2.242-2.704-2.24 2.704c-.707.787-1.551 1.18-2.533 1.18h-3.85c-.032 0-.057-.01-.073-.03a.124.124 0 01-.024-.079v-2.436c0-.024.008-.046.024-.067.016-.02.041-.03.073-.03h3.655c.17 0 .32-.069.45-.207l2.643-3.191 4.104-4.969z"
      fill="#00D1FF"
    />
    <Defs>
      <LinearGradient
        id="asnx_svg__paint0_linear"
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

export default SvgAsnx;
