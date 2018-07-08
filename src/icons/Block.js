import React from "react";
import Svg, { G, Circle, Path } from "svgs";
const Block = props => (
  <Svg viewBox="0 0 32 32" width={32} height={32} {...props}>
    <G fill="none" fillRule="evenodd">
      <Circle cx={16} cy={16} r={16} fill="#101341" fillRule="nonzero" />
      <G fill="#FFF">
        <Path d="M11.022 7H21.25l5.25 9-5.25 9H10.931l5.16-9-5.07-9zm5.43 3.166L19.803 16l-3.35 5.834h2.988L22.789 16l-3.35-5.834h-2.986z" />
        <Path
          opacity={0.5}
          d="M12.113 11.026L9.211 16l2.876 4.93-1.839 3.209L5.5 16l4.789-8.211z"
        />
      </G>
    </G>
  </Svg>
);

export default Block;
