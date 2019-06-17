import React from "react";
import Svg, { G, Circle, Path } from "react-native-svg";

const SvgElec = props => (
  <Svg width={32} height={32} viewBox="0 0 32 32" {...props}>
    <G fill="none">
      <Circle cx={16} cy={16} r={16} fill="#F90" />
      <G fill="#FFF">
        <Path d="M10.76 27.587l12.666-13.303H15.76z" />
        <Path d="M8 18.27h7.666l7.76-3.986H15.76z" />
        <Path d="M19.51 4L8 18.27h7.666z" />
      </G>
    </G>
  </Svg>
);

export default SvgElec;
