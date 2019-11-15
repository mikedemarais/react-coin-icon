import React from "react";
import Svg, { G, Circle, Path } from "react-native-svg";

const SvgWings = props => (
  <Svg height={40} width={40} viewBox="0 0 32 32" {...props}>
    <G fill="none" fillRule="evenodd">
      <Circle cx={16} cy={16} fill="#0dc9f7" r={16} />
      <G fill="#fff" fillRule="nonzero">
        <Path
          d="M18.904 15.739l-3.045 2.364-1.247-4.325-7.224-1.935 9.481.487z"
          fillOpacity={0.305}
        />
        <Path
          d="M8.27 23.993L24.586 11.33 26 14.476l-1.855-.513-.065 3.264z"
          fillOpacity={0.7}
        />
        <Path d="M22.796 17.78l-4.747-8.161L6 9l9.183 2.461 2.49 8.49z" />
      </G>
    </G>
  </Svg>
);

export default SvgWings;
