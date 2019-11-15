import React from "react";
import Svg, { G, Circle, Path } from "react-native-svg";

const SvgHight = props => (
  <Svg width={40} height={40} viewBox="0 0 40 40" {...props}>
    <G fill="none">
      <Circle cx={16} cy={16} r={16} fill="#117FC0" />
      <Path
        d="M26.496 10.332l-8.455 13.94h-5.042l3.875-6.397h-3.851l-4.49 7.404a11.905 11.905 0 0017.96-14.94l.003-.007zM19.114 7.83l-3.67 6.04H19.3l4.274-7.049a11.905 11.905 0 00-17.96 14.94l8.452-13.93h5.047z"
        fill="#FFF"
      />
    </G>
  </Svg>
);

export default SvgHight;
