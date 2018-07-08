import React from "react";
import Svg, { G, Circle, Path } from "svgs";
const Icx = props => (
  <Svg viewBox="0 0 32 32" height={32} width={32} {...props}>
    <G fill="none" fillRule="evenodd">
      <Circle cx={16} cy={16} fill="#1fc5c9" r={16} />
      <Path
        d="M11.296 22.472l2.164-2.164a5 5 0 0 0 6.848-6.848l2.164-2.164a8 8 0 0 1-11.176 11.176zm-1.768-1.768A8 8 0 0 1 20.704 9.528l-2.164 2.164a5 5 0 0 0-6.848 6.848zM24 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM8 26a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
        fill="#fff"
      />
    </G>
  </Svg>
);

export default Icx;
