import React from "react";
import Svg, { G, Circle, Path } from "react-native-svg";

const SvgOng = props => (
  <Svg width={32} height={32} viewBox="0 0 32 32" {...props}>
    <G fill="none" fillRule="evenodd">
      <Circle cx={16} cy={16} r={16} fill="#000" fillRule="nonzero" />
      <G transform="translate(5 5)" fill="#FFF">
        <Path d="M10.943 21.311c5.74 0 10.088-3.846 10.99-8.878h-4.897c-.732 2.672-3.004 4.628-6.035 4.628-3.009 0-5.31-1.97-6.073-4.628H0c.869 5.05 5.18 8.878 10.943 8.878z" />
        <Circle cx={10.971} cy={2.527} r={2.527} />
        <Path d="M4.655 12.433v-.05c0-3.593 2.574-6.526 6.285-6.526 3.712 0 6.34 2.983 6.346 6.576H4.655z" />
      </G>
    </G>
  </Svg>
);

export default SvgOng;
