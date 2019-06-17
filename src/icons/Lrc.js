import React from "react";
import Svg, { G, Circle, Path } from "react-native-svg";

const SvgLrc = props => (
  <Svg height={32} width={32} viewBox="0 0 32 32" {...props}>
    <G fill="none" fillRule="evenodd">
      <Circle cx={16} cy={16} fill="#2ab6f6" r={16} />
      <Path
        d="M16 6l9 12.533L16 26l-9-7.467zm-1.174 6.667L10.913 18l3.913 3.2zm2.348 0V21.2l3.913-3.2z"
        fill="#fff"
      />
    </G>
  </Svg>
);

export default SvgLrc;
