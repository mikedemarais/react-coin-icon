import React from "react";
import Svg, { G, Circle, Path } from "react-native-svg";

const SvgVtho = props => (
  <Svg width={32} height={32} viewBox="0 0 32 32" {...props}>
    <G fill="none">
      <Circle cx={16} cy={16} r={16} fill="#2A5284" />
      <G fill="#FFF">
        <Path
          fillOpacity={0.704}
          d="M20.272 5.058h3.023l-5.682 7.584h5.099l-12.18 14.3 3.94-10.104h-4.45l4.487-11.78z"
        />
        <Path d="M20.272 5.058h.182l-5.107 8.713h4.67l-9.485 13.17 3.94-10.103h-4.45l4.487-11.78z" />
      </G>
    </G>
  </Svg>
);

export default SvgVtho;
