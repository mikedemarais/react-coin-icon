import React from "react";
import Svg, { G, Circle, Path } from "react-native-svg";

const SvgNeos = props => (
  <Svg height={40} width={40} viewBox="0 0 32 32" {...props}>
    <G fill="none" fillRule="evenodd">
      <Circle cx={16} cy={16} fill="#e5f300" r={16} />
      <Path
        d="M10.5 9.358l8.143 4.926v3.097l-5.714-3.433V26H10.5zm11 13.284l-8.143-4.926V14.62l5.714 3.433V6H21.5z"
        fill="#fff"
      />
    </G>
  </Svg>
);

export default SvgNeos;
