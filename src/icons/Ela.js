import React from "react";
import Svg, { G, Circle, Path } from "react-native-svg";

const SvgEla = props => (
  <Svg width={40} height={40} viewBox="0 0 32 32" {...props}>
    <G fill="none" fillRule="evenodd">
      <Circle cx={16} cy={16} r={16} fill="#3FBADF" />
      <G fill="#FFF" fillRule="nonzero">
        <Path
          fillOpacity={0.4}
          d="M11 22.119l5-2.82v5.635l-5-2.815zm0-9l5-2.82v5.635l-5-2.815z"
        />
        <Path
          fillOpacity={0.7}
          d="M26 19.23l-5 2.886V16.43l5 2.8zm0-9l-5 2.886V7.43l5 2.8z"
        />
        <Path
          fillOpacity={0.8}
          d="M11 22.116v-5.683l5 2.87-5 2.813zm0-9V7.433l5 2.87-5 2.813z"
        />
        <Path d="M21 22.116l-5-2.812 5-2.874v5.686zm0-9l-5-2.812 5-2.874v5.686z" />
        <Path
          fillOpacity={0.6}
          d="M21 22.116l-5 2.818v-5.63l5 2.812zm0-9l-5 2.818v-5.63l5 2.812z"
        />
        <Path
          fillOpacity={0.5}
          d="M11 16.433v5.683l-5-2.885 5-2.798zm0-9v5.683l-5-2.885 5-2.798z"
        />
      </G>
    </G>
  </Svg>
);

export default SvgEla;
