import React from "react";
import Svg, { G, Circle, Path } from "react-native-svg";

const SvgCix = props => (
  <Svg width={32} height={32} viewBox="0 0 32 32" {...props}>
    <G fill="none">
      <Circle cx={16} cy={16} r={16} fill="#0576B4" />
      <G fill="#FFF">
        <Path d="M24.668 18.863l-1.059-.663 2.31-.027.048-.026v.025l.954-.01-1.619 2.634-.145-1.27-7.364 4.063L15 19.86l-7.83 4.126v-.94l8.073-4.253 2.792 3.729 6.634-3.659zm-10.112-.905l-3.06 1.611V8.644h3.06v9.314zm8.653.481l-3.06 1.7V8.644h3.06v9.795z" />
        <Path
          d="M18.883 20.843l-.657.364-2.404-3.21V9.894h3.06v10.949zm-8.654-.607l-3.06 1.612V11.312h3.06v8.924z"
          opacity={0.5}
        />
      </G>
    </G>
  </Svg>
);

export default SvgCix;
