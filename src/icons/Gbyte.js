import React from "react";
import Svg, { G, Circle } from "react-native-svg";

const SvgGbyte = props => (
  <Svg width={40} height={40} viewBox="0 0 32 32" {...props}>
    <G fill="none" fillRule="evenodd">
      <Circle cx={16} cy={16} r={16} fill="#302C2C" fillRule="nonzero" />
      <Circle cx={16} cy={16} r={11} fill="#FFF" />
    </G>
  </Svg>
);

export default SvgGbyte;
