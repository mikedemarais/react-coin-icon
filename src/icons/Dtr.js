import React from "react";
import Svg, { G, Circle, Path } from "react-native-svg";

const SvgDtr = props => (
  <Svg height={40} width={40} viewBox="0 0 32 32" {...props}>
    <G fill="none" fillRule="evenodd">
      <Circle cx={16} cy={16} fill="#121747" r={16} />
      <G fill="#fff" fillRule="nonzero">
        <Path d="M18.032 22.87c0 1.145-.92 2.074-2.056 2.074s-2.055-.929-2.055-2.075V9.08c0-1.145.92-2.074 2.055-2.074s2.056.929 2.056 2.075zm-6.92.005a2.072 2.072 0 01-1.015 1.82 2.032 2.032 0 01-2.068 0 2.072 2.072 0 01-1.014-1.82v-3.1a2.072 2.072 0 011.014-1.82 2.032 2.032 0 012.068 0 2.072 2.072 0 011.014 1.82z" />
        <Path
          d="M24.956 17.4c0 1.145-.92 2.074-2.056 2.074s-2.056-.93-2.056-2.075v-5.233c0-1.146.92-2.075 2.056-2.075s2.056.929 2.056 2.075z"
          opacity={0.5}
        />
      </G>
    </G>
  </Svg>
);

export default SvgDtr;
