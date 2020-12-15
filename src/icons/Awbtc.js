import React from "react";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";

const SvgAwbtc = props => (
  <Svg width={40} height={40} fill="none" viewBox="0 0 40 40" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20z"
      fill="url(#awbtc_svg__paint0_linear)"
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
      fill="#F90"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M27.053 17.72c.319-2.128-1.302-3.273-3.519-4.036l.72-2.884-1.756-.438-.7 2.808a73.436 73.436 0 00-1.407-.331l.705-2.827-1.754-.437-.72 2.883-1.119-.273-2.42-.604-.468 1.875s1.303.299 1.275.317c.711.178.84.648.818 1.021l-.819 3.285-.003.013-1.148 4.603c-.087.215-.307.54-.804.416.017.026-1.276-.318-1.276-.318l-.872 2.01 2.285.569c.425.107.841.218 1.251.323l-.726 2.917 1.753.438.72-2.887c.479.13.944.25 1.399.363L17.75 29.4l1.755.438.727-2.912c2.993.566 5.244.338 6.192-2.37.763-2.18-.038-3.437-1.613-4.257 1.147-.264 2.01-1.019 2.241-2.577zm-8.45 2.466l-.964 3.865c.099.024.214.055.343.089 1.432.378 4.563 1.205 5.06-.795.51-2.045-2.526-2.726-4.007-3.059-.166-.037-.312-.07-.432-.1zm.441-1.768c.991.247 4.046 1.254 4.541-.729.516-2.069-2.676-2.53-3.667-2.777l-.874 3.505z"
      fill="#fff"
    />
    <Defs>
      <LinearGradient
        id="awbtc_svg__paint0_linear"
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

export default SvgAwbtc;
