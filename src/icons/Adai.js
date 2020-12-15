import React from "react";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";

const SvgAdai = props => (
  <Svg width={40} height={40} fill="none" viewBox="0 0 40 40" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20z"
      fill="url(#adai_svg__paint0_linear)"
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
      fill="#FEBE44"
    />
    <Path
      d="M29.925 16.748h-1.999c-1.1-3.054-4.059-5.148-7.96-5.148h-6.417v5.148H11.32v1.847h2.229v1.937H11.32v1.847h2.229v5.086h6.417c3.857 0 6.793-2.077 7.921-5.086h2.038v-1.847h-1.589c.04-.326.062-.663.062-1v-.044c0-.303-.017-.601-.045-.893h1.577v-1.847h-.005zm-14.58-3.503h4.62c2.864 0 4.991 1.409 5.974 3.498H15.345v-3.498zm4.62 12.559h-4.62v-3.43h10.583c-.988 2.054-3.11 3.43-5.962 3.43zm6.575-6.232c0 .326-.023.646-.068.954H15.345V18.59h11.133c.04.303.062.617.062.937v.045z"
      fill="#fff"
    />
    <Defs>
      <LinearGradient
        id="adai_svg__paint0_linear"
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

export default SvgAdai;
