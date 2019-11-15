import React from "react";
import Svg, { G, Circle, Path } from "react-native-svg";

const SvgVtc = props => (
  <Svg width={40} height={40} viewBox="0 0 40 40" {...props}>
    <G fill="none" fillRule="evenodd">
      <Circle cx={16} cy={16} r={16} fill="#048657" />
      <Path
        fill="#FFF"
        fillRule="nonzero"
        d="M2.632 16.57l1.95-2.221h6.938l4.263 5.438L26.938 4.334a14.205 14.205 0 011.86 2.04 15.002 15.002 0 011.496 2.446L16.599 27.763c-.259.272-.531.408-.816.408-.286 0-.573-.136-.862-.408L6.26 16.569H2.632z"
      />
    </G>
  </Svg>
);

export default SvgVtc;
