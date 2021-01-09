import React from "react";
import Svg, {
  Path,
  Defs,
  RadialGradient,
  Stop,
  LinearGradient
} from "react-native-svg";

const SvgSteth = props => (
  <Svg width={40} height={40} fill="none" viewBox="0 0 40 40" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20z"
      fill="url(#steth_svg__paint0_radial)"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20z"
      fill="url(#steth_svg__paint1_radial)"
      fillOpacity={0.75}
    />
    <Path
      d="M11.7 21.101l8.3 4.91 8.298-4.91L20 32.8 11.7 21.1z"
      fill="url(#steth_svg__paint2_linear)"
    />
    <Path
      d="M20 24.183l-8.3-4.91L20 6.2l8.3 13.072-8.3 4.91z"
      fill="url(#steth_svg__paint3_linear)"
    />
    <Defs>
      <RadialGradient
        id="steth_svg__paint0_radial"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(0 -40 40 0 20 40)"
      >
        <Stop stopColor="#FFD098" />
        <Stop offset={1} stopColor="#F58E8E" />
      </RadialGradient>
      <RadialGradient
        id="steth_svg__paint1_radial"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(0 20 -20 0 20 20)"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#fff" stopOpacity={0} />
      </RadialGradient>
      <LinearGradient
        id="steth_svg__paint2_linear"
        x1={19.999}
        y1={21.101}
        x2={19.999}
        y2={32.799}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#5FBCFF" />
        <Stop offset={1} stopColor="#629DE3" />
      </LinearGradient>
      <LinearGradient
        id="steth_svg__paint3_linear"
        x1={20}
        y1={6.2}
        x2={20}
        y2={24.183}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FF9898" />
        <Stop offset={1} stopColor="#00A3FF" />
      </LinearGradient>
    </Defs>
  </Svg>
);

export default SvgSteth;
