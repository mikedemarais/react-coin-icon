import React from "react";
import Svg, { G, Circle, Path } from "react-native-svg";

const SvgWpr = props => (
  <Svg height={40} width={40} viewBox="0 0 40 40" {...props}>
    <G fill="none" fillRule="evenodd">
      <Circle cx={16} cy={16} fill="#ffe600" r={16} />
      <Path
        d="M3.993 5.425a16.096 16.096 0 012.65-2.405l4.452 15.918 1.973-8.438h3.74l1.972 8.438 2.337-8.438h3.749l.035.15 4.074 14.714a16.092 16.092 0 01-2.55 2.775l-3.437-12.41-1.96 7.078-.035.15h-4.186l-1.869-6.932-1.87 6.932H8.882l-.035-.15z"
        fill="#fff"
      />
    </G>
  </Svg>
);

export default SvgWpr;
