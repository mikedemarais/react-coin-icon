import React from "react";
import Svg, { G, Circle, Path } from "react-native-svg";

const SvgDgd = props => (
  <Svg width={32} height={32} viewBox="0 0 32 32" {...props}>
    <G fill="none" fillRule="evenodd">
      <Circle cx={16} cy={16} r={16} fill="#F4D029" />
      <Path
        fill="#FFF"
        d="M12.5 11v3h-7v-3h7zm1 0h2v10h-10v-6h8v-4zm-6 6v2h6v-2h-6zm19-4h-8v6h6v-2h-4v-2h6v6h-10V11h10v2z"
      />
    </G>
  </Svg>
);

export default SvgDgd;
