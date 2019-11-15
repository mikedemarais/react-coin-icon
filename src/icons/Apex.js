import React from "react";
import Svg, { G, Circle, Path } from "react-native-svg";

const SvgApex = props => (
  <Svg width={32} height={32} viewBox="0 0 32 32" {...props}>
    <G fill="none" fillRule="evenodd">
      <Circle cx={16} cy={16} r={16} fill="#1F4C9F" />
      <Path
        fill="#FFF"
        d="M6 19.25L16 6.5l10 12.75v4.25L16 10.75 6 23.5v-4.25zm10.5 1.25a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"
      />
    </G>
  </Svg>
);

export default SvgApex;
