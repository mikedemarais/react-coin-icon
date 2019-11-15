import React from "react";
import Svg, { G, Circle, Path } from "react-native-svg";

const SvgDcr = props => (
  <Svg width={40} height={40} viewBox="0 0 32 32" {...props}>
    <G fill="none" fillRule="evenodd">
      <Circle cx={16} cy={16} r={16} fill="#2ED6A1" />
      <Path
        fill="#FFF"
        fillRule="nonzero"
        d="M14.856 17.62h4.42a2.987 2.987 0 002.978-2.996 2.987 2.987 0 00-2.978-2.995H17.87L14.856 9h4.42a5.602 5.602 0 015.488 4.545 5.632 5.632 0 01-3.379 6.29l3.485 3.042h-3.991l-6.023-5.258zm2.157-3.36h-4.42a2.987 2.987 0 00-2.978 2.994 2.987 2.987 0 002.978 2.995H14l3.012 2.63h-4.419a5.602 5.602 0 01-5.488-4.545 5.632 5.632 0 013.379-6.29L7.002 9h3.991l6.02 5.26z"
      />
    </G>
  </Svg>
);

export default SvgDcr;
