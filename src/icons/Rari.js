import React from "react";
import Svg, { Path, Defs, RadialGradient, Stop } from "react-native-svg";

const SvgRari = props => (
  <Svg width={40} height={40} fill="none" viewBox="0 0 40 40" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20z"
      fill="url(#rari_svg__paint0_radial)"
    />
    <Path
      d="M26.334 19.878c1.05-.273 1.984-1.058 1.984-2.637 0-2.63-2.232-3.241-5.093-3.241H11.834v11.839h4.795V21.82h5.688c.877 0 1.389.347 1.389 1.207v2.81H28.5v-2.96c0-1.611-.91-2.628-2.166-3zM22.4 18.63h-5.77v-1.158h5.77c.628 0 1.008.083 1.008.579 0 .496-.38.579-1.008.579z"
      fill="#fff"
    />
    <Defs>
      <RadialGradient
        id="rari_svg__paint0_radial"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(13.0113 20.54863 -21.4938 13.60977 9.354 13.357)"
      >
        <Stop stopColor="#0C50FF" />
        <Stop offset={0.557} stopColor="#5B9DFF" />
        <Stop offset={1} stopColor="#FF74F1" />
      </RadialGradient>
    </Defs>
  </Svg>
);

export default SvgRari;
