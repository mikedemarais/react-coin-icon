import React from "react";
import Svg, { G, Circle, Path } from "react-native-svg";

const SvgPivx = props => (
  <Svg width={40} height={40} viewBox="0 0 40 40" {...props}>
    <G fill="none" fillRule="evenodd">
      <Circle cx={16} cy={16} r={16} fill="#5E4778" fillRule="nonzero" />
      <Path
        fill="#FFF"
        stroke="#FFF"
        d="M10.5 12.241h6.153v1.255H10.5v-1.255zm12 .59c0 2.974-2.11 4.895-5.028 4.895H13.43V24h-1.6v-7.693h5.425c2.175 0 3.595-1.292 3.595-3.476 0-2.158-1.42-3.413-3.57-3.413h-1.688l-4.043.013V8h5.91c2.93 0 5.04 1.857 5.04 4.831h.001z"
      />
    </G>
  </Svg>
);

export default SvgPivx;
