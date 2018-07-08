import React from "react";
import Svg, { G, Circle, Path } from "svgs";
const Emc = props => (
  <Svg viewBox="0 0 32 32" width={32} height={32} {...props}>
    <G fill="none" fillRule="evenodd">
      <Circle cx={16} cy={16} r={16} fill="#B49FFC" />
      <Path
        fill="#FFF"
        d="M8 8v3.2h6.4v3.2H8v3.2h9.6v-6.4h3.2v9.6H8V24h16V8z"
      />
    </G>
  </Svg>
);

export default Emc;
