import React from "react";
import Svg, { G, Circle, Path } from "react-native-svg";

const SvgTnt = props => (
  <Svg height={40} width={40} viewBox="0 0 40 40" {...props}>
    <G fill="none">
      <Circle cx={16} cy={16} fill="#ff4081" r={16} />
      <Path
        d="M13.89 21.503L14.048 25s1.875-.318 3.828 0l.156-3.497zM11.626 18.8s5.469-.477 8.672 0l.312-3.815a59.109 59.109 0 00-9.14 0zM26 8.944S15.531 6.718 6 9.103l.703 4.371.86-1.669s8.984-1.351 17.03 0l.782 1.67z"
        fill="#fff"
      />
    </G>
  </Svg>
);

export default SvgTnt;
