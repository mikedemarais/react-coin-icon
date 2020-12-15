import React from "react";
import Svg, {
  Path,
  Mask,
  G,
  Defs,
  LinearGradient,
  Stop
} from "react-native-svg";

const SvgAmana = props => (
  <Svg width={40} height={40} fill="none" viewBox="0 0 40 40" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20z"
      fill="url(#amana_svg__paint0_linear)"
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
      fill="url(#amana_svg__paint1_linear)"
    />
    <Mask
      id="amana_svg__a"
      maskUnits="userSpaceOnUse"
      x={4}
      y={4}
      width={32}
      height={32}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 36c8.837 0 16-7.163 16-16S28.837 4 20 4 4 11.163 4 20s7.163 16 16 16z"
        fill="#fff"
      />
    </Mask>
    <G mask="url(#amana_svg__a)">
      <Path
        d="M15.336 14.4l-1.288 12h11.288l-10-12z"
        fill="url(#amana_svg__paint2_linear)"
      />
      <Path d="M5.336 26.4h10v-12l-10 12z" fill="#fff" />
      <Path
        d="M5.6 29.6a18.25 18.25 0 003.8 3.2h22.8a18.25 18.25 0 003.8-3.2H5.6z"
        fill="#FC9965"
      />
      <Path
        d="M8 32.8c3.451 2.51 7.75 4 12.4 4s8.949-1.49 12.4-4H8z"
        fill="#FF2D55"
      />
      <Path
        d="M25.464 20.8l-1.25 8.8H32.8l-7.336-8.8z"
        fill="url(#amana_svg__paint3_linear)"
      />
      <Path
        d="M24.663 26.4H2.272a15.639 15.639 0 002.074 3.2h20.326v-3.2h-.009z"
        fill="#FFBC5B"
      />
      <Path d="M18.136 29.6h7.328v-8.8l-7.328 8.8z" fill="#fff" />
      <Path
        d="M25.464 18.4a4 4 0 100-8 4 4 0 000 8zM15.336 12a2 2 0 100-4 2 2 0 000 4z"
        fill="#FFC95B"
      />
    </G>
    <Defs>
      <LinearGradient
        id="amana_svg__paint0_linear"
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
        id="amana_svg__paint1_linear"
        x1={20}
        y1={-2.627}
        x2={-2.627}
        y2={20}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FF2D55" />
        <Stop offset={1} stopColor="#FFBC5B" />
      </LinearGradient>
      <LinearGradient
        id="amana_svg__paint2_linear"
        x1={14.044}
        y1={14.4}
        x2={14.044}
        y2={26.4}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#A524B3" />
        <Stop offset={1} stopColor="#FF2D55" />
      </LinearGradient>
      <LinearGradient
        id="amana_svg__paint3_linear"
        x1={24.212}
        y1={20.8}
        x2={24.212}
        y2={29.6}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#A524B3" />
        <Stop offset={1} stopColor="#FF2D55" />
      </LinearGradient>
    </Defs>
  </Svg>
);

export default SvgAmana;
