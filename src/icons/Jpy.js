import React from "react";
import Svg, { G, Circle, Path } from "react-native-svg";

const SvgJpy = props => (
  <Svg height={32} width={32} viewBox="0 0 32 32" {...props}>
    <G fill="none" fillRule="evenodd">
      <Circle cx={16} cy={16} fill="#eac749" r={16} />
      <Path
        d="M17.548 18.711v1.878h5.063v2.288h-5.063V25.5h-3.096v-2.623H9.389v-2.288h5.063v-1.878H9.389v-2.288h4.171L7.5 7.5h3.752l4.8 7.534L20.853 7.5H24.5l-6.086 8.923h4.197v2.288z"
        fill="#fff"
      />
    </G>
  </Svg>
);

export default SvgJpy;
