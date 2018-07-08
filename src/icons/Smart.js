import React from "react";
import Svg, { G, Circle, Path } from "svgs";
const Smart = props => (
  <Svg viewBox="0 0 32 32" width={32} height={32} {...props}>
    <G fill="none" fillRule="evenodd">
      <Circle cx={16} cy={16} r={16} fill="#FAC000" />
      <Path
        fill="#FFF"
        d="M14.2 10.909h7.56V7.576H17.2V6h-1.92v1.576H10v3.454l5.28 4.546L10 20.909v3.697h5.28V26h1.92v-1.394H22v-3.333h-7.92l5.7-5.697z"
      />
    </G>
  </Svg>
);

export default Smart;
