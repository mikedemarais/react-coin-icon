import React from "react";
import Svg, { G, Circle, Path } from "svgs";
const Eth = props => (
  <Svg viewBox="0 0 32 32" width={32} height={32} {...props}>
    <G fill="none" fillRule="evenodd">
      <Circle fill="#0C0C0D" cx={16} cy={16} r={16} />
      <Path
        d="M16 20.324l5.999-3.55L16 25.232l-6-8.456 6 3.55zm0-14.321l6 9.45-6 3.55-6-3.55 6-9.45z"
        fill="#FFF"
        fillRule="nonzero"
      />
    </G>
  </Svg>
);

export default Eth;
