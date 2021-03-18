import React from "react";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";

const SvgRgt = props => (
  <Svg width={40} height={40} fill="none" viewBox="0 0 40 40" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20z"
      fill="#25292E"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 5.157C11.802 5.157 5.157 11.802 5.157 20S11.802 34.843 20 34.843 34.843 28.198 34.843 20 28.198 5.157 20 5.157zM4 20c0-8.837 7.163-16 16-16s16 7.163 16 16-7.163 16-16 16S4 28.837 4 20z"
      fill="url(#rgt_svg__paint0_linear)"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 8.61c6.293 0 11.393 5.1 11.393 11.392S26.293 31.395 20 31.395c-6.292 0-11.393-5.1-11.393-11.393C8.607 13.71 13.708 8.61 20 8.61zm12.55 11.392c0-6.93-5.619-12.55-12.55-12.55-6.93 0-12.55 5.62-12.55 12.55 0 6.931 5.62 12.55 12.55 12.55 6.931 0 12.55-5.619 12.55-12.55z"
      fill="url(#rgt_svg__paint1_linear)"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 11.596a8.404 8.404 0 110 16.808 8.404 8.404 0 010-16.808zM29.56 20a9.56 9.56 0 10-19.12 0 9.56 9.56 0 0019.12 0z"
      fill="url(#rgt_svg__paint2_linear)"
    />
    <Defs>
      <LinearGradient
        id="rgt_svg__paint0_linear"
        x1={4.348}
        y1={23.169}
        x2={35.708}
        y2={16.769}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#25292E" />
      </LinearGradient>
      <LinearGradient
        id="rgt_svg__paint1_linear"
        x1={32.278}
        y1={22.488}
        x2={7.68}
        y2={17.468}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#25292E" />
      </LinearGradient>
      <LinearGradient
        id="rgt_svg__paint2_linear"
        x1={29.352}
        y1={21.894}
        x2={10.614}
        y2={18.07}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#25292E" />
        <Stop offset={1} stopColor="#fff" />
      </LinearGradient>
    </Defs>
  </Svg>
);

export default SvgRgt;
