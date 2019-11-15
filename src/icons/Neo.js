import React from "react";
import Svg, { G, Circle, Path } from "react-native-svg";

const SvgNeo = props => (
  <Svg width={40} height={40} viewBox="0 0 40 40" {...props}>
    <G fill="none" fillRule="evenodd">
      <Circle cx={16} cy={16} r={16} fill="#58BF00" />
      <Path
        fill="#FFF"
        fillRule="nonzero"
        d="M25 22.58l-6.99-3.258v-7.22L25 9.623V22.58zM14.823 26L8 22.821V9.958l6.823 3.18V26zm10.01-16.843l-.113.04-6.71 2.381-.168.06-2.843 1.008-6.73-3.136 9.573-3.396.084-.03.177-.063.062-.021 6.73 3.136-.063.021z"
      />
    </G>
  </Svg>
);

export default SvgNeo;
