import React from "react";
import Svg, { G, Circle, Path } from "react-native-svg";

const SvgNexo = props => (
  <Svg width={32} height={32} viewBox="0 0 32 32" {...props}>
    <G fill="none">
      <Circle cx={16} cy={16} r={16} fill="#1A4199" />
      <G fill="#FFF">
        <Path
          d="M10.676 7.125l10.732 6.191v6.319L5 10.159l5.265-3.034a.42.42 0 0 1 .42 0"
          opacity={0.7}
        />
        <Path opacity={0.9} d="M21.408 7l-5.467 3.16 5.467 3.156z" />
        <Path d="M21.408 7l5.264 3.036a.42.42 0 0 1 .22.367v12.389l-5.484-3.157V7z" />
        <Path
          d="M26.881 22.792l-5.264 3.033a.44.44 0 0 1-.42 0l-10.732-6.19v-6.328l16.416 9.485z"
          opacity={0.9}
        />
        <Path
          d="M5 10.16v12.387a.42.42 0 0 0 .22.368l5.265 3.036V13.307L5 10.16z"
          opacity={0.6}
        />
        <Path opacity={0.7} d="M10.476 25.95l5.465-3.158-5.465-3.157z" />
      </G>
    </G>
  </Svg>
);

export default SvgNexo;
