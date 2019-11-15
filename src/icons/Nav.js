import React from "react";
import Svg, { G, Circle, Path } from "react-native-svg";

const SvgNav = props => (
  <Svg width={40} height={40} viewBox="0 0 40 40" {...props}>
    <G fill="none" fillRule="evenodd">
      <Circle cx={16} cy={16} r={16} fill="#7D59B5" />
      <Path
        fill="#FFF"
        d="M21.32 22h-4.796l-3.798-7.005L9.797 22H5l5.018-12h4.797l3.945 7.276L22.203 10H27l-5.68 12z"
      />
    </G>
  </Svg>
);

export default SvgNav;
