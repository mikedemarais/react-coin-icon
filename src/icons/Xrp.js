import React from "react";
import Svg, { G, Circle, Path } from "react-native-svg";

const SvgXrp = props => (
  <Svg width={32} height={32} viewBox="0 0 32 32" {...props}>
    <G fill="none">
      <Circle cx={16} cy={16} r={16} fill="#23292F" />
      <Path
        d="M23.07 8h2.89l-6.015 5.957a5.621 5.621 0 0 1-7.89 0L6.035 8H8.93l4.57 4.523a3.556 3.556 0 0 0 4.996 0L23.07 8zM8.895 24.563H6l6.055-5.993a5.621 5.621 0 0 1 7.89 0L26 24.562h-2.895L18.5 20a3.556 3.556 0 0 0-4.996 0l-4.61 4.563z"
        fill="#FFF"
      />
    </G>
  </Svg>
);

export default SvgXrp;
