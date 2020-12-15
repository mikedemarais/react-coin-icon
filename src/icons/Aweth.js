import React from "react";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";

const SvgAweth = props => (
  <Svg width={40} height={40} fill="none" viewBox="0 0 40 40" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20z"
      fill="url(#aweth_svg__paint0_linear)"
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
      fill="#25292E"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M28.713 9.557A13.545 13.545 0 0020 6.4a13.545 13.545 0 00-8.713 3.157.39.39 0 00-.022.577l.285.285a.41.41 0 00.551.022A12.35 12.35 0 0120 7.6a12.35 12.35 0 017.899 2.84.41.41 0 00.55-.02l.286-.286a.39.39 0 00-.022-.577zM10.42 11.55a.41.41 0 01.022.551A12.35 12.35 0 007.6 20a12.35 12.35 0 002.841 7.899.41.41 0 01-.022.55l-.285.286a.39.39 0 01-.577-.022A13.545 13.545 0 016.4 20c0-3.315 1.186-6.353 3.157-8.713a.39.39 0 01.577-.022l.285.285zM29.56 27.9a.41.41 0 00.022.55l.285.286a.39.39 0 00.577-.022A13.545 13.545 0 0033.6 20c0-3.315-1.186-6.353-3.157-8.713a.39.39 0 00-.577-.022l-.285.285a.41.41 0 00-.022.551A12.35 12.35 0 0132.4 20a12.35 12.35 0 01-2.84 7.899zm-18.272 2.544A13.545 13.545 0 0020 33.6c3.315 0 6.353-1.186 8.713-3.157a.39.39 0 00.022-.577l-.285-.285a.41.41 0 00-.551-.022A12.349 12.349 0 0120 32.4a12.35 12.35 0 01-7.899-2.841.41.41 0 00-.55.022l-.286.285a.39.39 0 00.022.577z"
      fill="#fff"
    />
    <Path
      d="M14.6 20.735L20 23.93l5.399-3.195L20 28.345l-5.4-7.61z"
      fill="url(#aweth_svg__paint1_linear)"
    />
    <Path d="M20 22.74l-5.4-3.195L20 11.04l5.4 8.505-5.4 3.194z" fill="#fff" />
    <Defs>
      <LinearGradient
        id="aweth_svg__paint0_linear"
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
        id="aweth_svg__paint1_linear"
        x1={20}
        y1={20.735}
        x2={20}
        y2={28.345}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#fff" stopOpacity={0.9} />
      </LinearGradient>
    </Defs>
  </Svg>
);

export default SvgAweth;
