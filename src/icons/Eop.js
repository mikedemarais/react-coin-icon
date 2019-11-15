import React from "react";
import Svg, { G, Circle, Path } from "react-native-svg";

const SvgEop = props => (
  <Svg width={40} height={40} viewBox="0 0 40 40" {...props}>
    <G fill="none">
      <Circle cx={16} cy={16} r={16} fill="#35A7DF" />
      <Path
        d="M14.714 28L9.366 13.737l-2.16 9.84zM16.12 4.171l-5.863 7.132 5.863 14.983 5.897-14.983zM17.56 28l5.349-14.263 2.125 9.84z"
        fill="#FEFFFE"
      />
    </G>
  </Svg>
);

export default SvgEop;
