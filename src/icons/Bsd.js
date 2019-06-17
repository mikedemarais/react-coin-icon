import React from "react";
import Svg, { G, Circle, Path } from "react-native-svg";

const SvgBsd = props => (
  <Svg width={32} height={32} viewBox="0 0 32 32" {...props}>
    <G fill="none">
      <Circle cx={16} cy={16} r={16} fill="#000" />
      <Path
        d="M28 15.127H4l13.964-4.69L19.927 4 28 15.127zM4.11 16.655h23.78l-13.963 4.581-1.963 6.655-7.855-11.236z"
        fill="#FFF"
      />
    </G>
  </Svg>
);

export default SvgBsd;
