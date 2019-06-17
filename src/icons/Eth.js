import React from "react";
import Svg, { G, Circle, Path } from "react-native-svg";

const SvgEth = props => (
  <Svg width={32} height={32} viewBox="0 0 32 32" {...props}>
    <G fill="none" fillRule="evenodd">
      <Circle fill="#222" cx={16} cy={16} r={16} />
      <Path
        d="M16 4.96l6.64 10.458L16 19.346l-6.64-3.928L16 4.96zm0 15.85l6.639-3.93L16 26.24l-6.64-9.36L16 20.81z"
        fill="#FFF"
        fillRule="nonzero"
      />
    </G>
  </Svg>
);

export default SvgEth;
