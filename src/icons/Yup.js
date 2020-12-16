import React from "react";
import Svg, {
  Path,
  Defs,
  RadialGradient,
  Stop,
  LinearGradient
} from "react-native-svg";

const SvgYup = props => (
  <Svg width={40} height={40} fill="none" viewBox="0 0 40 40" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20z"
      fill="url(#yup_svg__paint0_radial)"
    />
    <Path
      d="M19.054 31.335c-.659-.003-1.12-.462-1.12-1.124-.003-1.637-.004-3.275-.001-4.912h.005v-4.953a.969.969 0 01.149-.508c1.603-2.687 3.16-5.4 4.731-8.106.475-.817.944-1.637 1.422-2.453.302-.515.826-.667 1.36-.399.422.212.851.413 1.26.65.673.39.816.958.426 1.627a4389.13 4389.13 0 01-3.891 6.655c-.484.828-.965 1.657-1.452 2.483a1.12 1.12 0 00-.152.59c.003 3.1.003 6.202.002 9.303 0 .573-.313.99-.839 1.12a1.003 1.003 0 01-.237.026 253.92 253.92 0 01-1.663.001zM14.76 13.3a2.262 2.262 0 112.265-2.24 2.252 2.252 0 01-2.256 2.24h-.009z"
      fill="url(#yup_svg__paint1_linear)"
    />
    <Defs>
      <RadialGradient
        id="yup_svg__paint0_radial"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(0 40 -40 0 20 0)"
      >
        <Stop stopColor="#F5F4F4" />
        <Stop offset={1} stopColor="#EBEAEA" />
      </RadialGradient>
      <LinearGradient
        id="yup_svg__paint1_linear"
        x1={20}
        y1={8.75}
        x2={20}
        y2={31.337}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#393939" />
        <Stop offset={1} stopColor="#070707" />
      </LinearGradient>
    </Defs>
  </Svg>
);

export default SvgYup;
