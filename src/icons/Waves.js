import React from "react";
import Svg, { G, Circle, Path } from "react-native-svg";

const SvgWaves = props => (
  <Svg height={32} width={32} viewBox="0 0 32 32" {...props}>
    <G fill="none" fillRule="evenodd">
      <Circle cx={16} cy={16} fill="#0155ff" r={16} />
      <Path d="M16 6l10 10-10 10L6 16z" fill="#fff" />
    </G>
  </Svg>
);

export default SvgWaves;
