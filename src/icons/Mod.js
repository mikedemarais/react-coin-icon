import React from "react";
import Svg, { G, Circle, Path } from "react-native-svg";

const SvgMod = props => (
  <Svg height={40} width={40} viewBox="0 0 32 32" {...props}>
    <G fill="none">
      <Circle cx={16} cy={16} fill="#09547d" r={16} />
      <G fill="#fff">
        <Path d="M22.985 21.007V8.08l-6.312 6.449z" opacity={0.5} />
        <Path d="M9 7l.304.312 8.467 8.675L9 24.985z" />
      </G>
    </G>
  </Svg>
);

export default SvgMod;
