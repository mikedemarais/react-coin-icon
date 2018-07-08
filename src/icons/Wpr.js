import React from "react";
import Svg, { G, Circle, Path } from "svgs";
const Wpr = props => (
  <Svg viewBox="0 0 32 32" height={32} width={32} {...props}>
    <G fill="none" fillRule="evenodd">
      <Circle cx={16} cy={16} fill="#ffe600" r={16} />
      <Path
        d="M3.993 5.425c.79-.896 1.679-1.704 2.65-2.405l4.452 15.918 1.973-8.438h3.74l1.972 8.438 2.337-8.438h3.749l.035.15 4.074 14.714a16.092 16.092 0 0 1-2.55 2.775l-3.437-12.41-1.96 7.078-.035.15h-4.186l-1.869-6.932-1.87 6.932H8.882l-.035-.15z"
        fill="#fff"
      />
    </G>
  </Svg>
);

export default Wpr;
