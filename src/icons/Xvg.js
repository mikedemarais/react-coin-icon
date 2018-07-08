import React from "react";
import Svg, { G, Circle, Path } from "svgs";
const Xvg = props => (
  <Svg viewBox="0 0 32 32" width={32} height={32} {...props}>
    <G fill="none">
      <Circle cx={16} cy={16} r={16} fill="#00CBFF" />
      <Path
        fill="#FFF"
        d="M9.61 10.335L8 7h16l-1.592 3.335H24L15.951 27 8 10.335h1.61zm0 0l6.438 13.33 6.36-13.33H9.611z"
      />
      <Path fill="#FFF" opacity={0.504} d="M16 24.5L8 7h15.999z" />
    </G>
  </Svg>
);

export default Xvg;
