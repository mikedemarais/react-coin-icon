import React from "react";
import Svg, { G, Circle, Path } from "svgs";
const Salt = props => (
  <Svg viewBox="0 0 32 32" width={32} height={32} {...props}>
    <G fill="none">
      <Circle cx={16} cy={16} r={16} fill="#1BEEF4" />
      <Path
        fill="#FFF"
        d="M16.5 10.445l5.804 12.214H10.696L16.5 10.445zM16.5 5L7 25h19L16.5 5z"
      />
    </G>
  </Svg>
);

export default Salt;
