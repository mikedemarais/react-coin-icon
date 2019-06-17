import React from "react";
import Svg, { G, Circle, Path } from "react-native-svg";

const SvgBat = props => (
  <Svg width={32} height={32} viewBox="0 0 32 32" {...props}>
    <G fill="none" fillRule="evenodd">
      <Circle fill="#FF5000" cx={16} cy={16} r={16} />
      <Path
        d="M6.4 22.32L16.049 6 25.6 22.298l-19.2.022zm9.626-9.715l-3.944 6.514h7.906l-3.962-6.514z"
        fill="#FFF"
        fillRule="nonzero"
      />
    </G>
  </Svg>
);

export default SvgBat;
