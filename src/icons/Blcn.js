import React from "react";
import Svg, { G, Circle, Path } from "react-native-svg";

const SvgBlcn = props => (
  <Svg height={40} width={40} viewBox="0 0 32 32" {...props}>
    <G fill="none" fillRule="evenodd">
      <Circle cx={16} cy={16} fill="#2aabe4" r={16} />
      <Path
        d="M7.9 7h6.2a.9.9 0 01.9.9v6.2a.9.9 0 01-.9.9H7.9a.9.9 0 01-.9-.9V7.9a.9.9 0 01.9-.9zm10 0h6.2a.9.9 0 01.9.9v6.2a.9.9 0 01-.9.9h-6.2a.9.9 0 01-.9-.9V7.9a.9.9 0 01.9-.9zm0 10h6.2a.9.9 0 01.9.9v6.2a.9.9 0 01-.9.9h-6.2a.9.9 0 01-.9-.9v-6.2a.9.9 0 01.9-.9zm-10 0h6.2a.9.9 0 01.9.9v6.2a.9.9 0 01-.9.9H7.9a.9.9 0 01-.9-.9v-6.2a.9.9 0 01.9-.9z"
        fill="#fff"
      />
    </G>
  </Svg>
);

export default SvgBlcn;
