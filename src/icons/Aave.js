import React from "react";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";

const SvgAave = props => (
  <Svg width={40} height={40} fill="none" viewBox="0 0 40 40" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20z"
      fill="url(#aave_svg__paint0_linear)"
    />
    <Path
      d="M28.914 27.152L22.036 10.53c-.389-.859-.963-1.28-1.724-1.28h-.608c-.76 0-1.334.421-1.724 1.28l-2.991 7.242h-2.264a1.24 1.24 0 00-1.234 1.23v.016a1.239 1.239 0 001.234 1.23h1.216l-2.856 6.904c-.054.152-.082.311-.084.472a1.3 1.3 0 00.338.926 1.186 1.186 0 00.912.354c.256-.004.504-.086.71-.236.216-.16.386-.375.49-.623l3.143-7.798h2.18a1.239 1.239 0 001.235-1.23v-.033a1.239 1.239 0 00-1.234-1.23H17.61l2.4-5.978 6.54 16.268c.104.248.274.463.49.623.206.15.454.232.71.236a1.188 1.188 0 00.912-.354 1.3 1.3 0 00.338-.926 1.114 1.114 0 00-.085-.47z"
      fill="#fff"
    />
    <Defs>
      <LinearGradient
        id="aave_svg__paint0_linear"
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

export default SvgAave;
