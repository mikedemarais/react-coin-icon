import React from "react";
import Svg, { G, Circle } from "svgs";
const Gbyte = props => (
  <Svg viewBox="0 0 32 32" width={32} height={32} {...props}>
    <G fill="none" fillRule="evenodd">
      <Circle cx={16} cy={16} r={16} fill="#302C2C" fillRule="nonzero" />
      <Circle cx={16} cy={16} r={11} fill="#FFF" />
    </G>
  </Svg>
);

export default Gbyte;
