import React from "react";
import Svg, { G, Circle, Path } from "svgs";
const Drgn = props => (
  <Svg viewBox="0 0 32 32" width={32} height={32} {...props}>
    <G fill="none">
      <Circle cx={16} cy={16} r={16} fill="#C91111" />
      <G fill="#FFF">
        <Path
          opacity={0.6}
          d="M9.4 20.78h2.818l-.072-7.327L22.64 26.776l-.033-15.732h-2.774l.072 7.401L9.404 5.087z"
        />
        <Path d="M9.4 9.953l.016-4.851 13.183 16.752.055 4.942z" />
      </G>
    </G>
  </Svg>
);

export default Drgn;
