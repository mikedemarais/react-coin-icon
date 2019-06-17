import React from "react";
import Svg, { G, Circle, Path } from "react-native-svg";

const SvgR = props => (
  <Svg height={32} width={32} viewBox="0 0 32 32" {...props}>
    <G fill="none">
      <Circle cx={16} cy={16} fill="#771a4e" r={16} />
      <Path
        d="M10.5 24.638l3.467-1.812V10.745l4.952 2.778-3.714 1.933v3.987L23.5 25v-3.745l-5.076-3.503 4.209-2.175v-3.866L13.967 7 10.5 8.812z"
        fill="#fff"
      />
    </G>
  </Svg>
);

export default SvgR;
