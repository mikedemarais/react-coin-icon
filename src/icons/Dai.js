import React from "react";
import Svg, { G, Circle, Path } from "svgs";
const Dai = props => (
  <Svg viewBox="0 0 32 32" width={32} height={32} {...props}>
    <G fill="none" fillRule="evenodd">
      <Circle fill="#FFF" cx={16} cy={16} r={16} />
      <G fillRule="nonzero">
        <Path
          fill="#FFCE45"
          d="M15.998 3.645L28.253 15.9 15.998 28.155 3.743 15.9z"
        />
        <Path
          fill="#FEBE44"
          d="M15.998 19.899l-12.265-4L15.998 3.644 28.263 15.9z"
        />
        <Path
          fill="#FFF"
          d="M7.999 15.1h5.6l2.399-2.667 2.666 2.666h5.6l-8.266-8.932z"
        />
        <Path
          fill="#D9A547"
          opacity={0.42}
          d="M15.998 28.154V3.644L28.253 15.9 15.998 28.154z"
        />
      </G>
    </G>
  </Svg>
);

export default Dai;
