import React from "react";
import Svg, { G, Circle, Path } from "react-native-svg";

const SvgElix = props => (
  <Svg height={40} width={40} viewBox="0 0 40 40" {...props}>
    <G fill="none">
      <Circle cx={16} cy={16} fill="#00aded" r={16} />
      <G fill="#fff">
        <Path d="M10.097 23.603l.002-.004 3.188-7.616-3.19-7.615 5.885 7.615-5.881 7.615zm11.776 0l-.004-.005-5.881-7.615 5.885-7.615-3.19 7.615 3.188 7.616z" />
        <Path
          d="M15.985 15.984v5.306l-5.89 2.31 5.89-7.62v-5.306l5.89-2.31z"
          fillOpacity={0.8}
        />
        <Path
          d="M15.985 21.29v4.651l-5.89-2.344 5.89-2.315v-5.298l-5.89-7.62 5.89 2.31V6.023l5.89 2.343-5.89 2.315v5.299l5.89 7.62z"
          fillOpacity={0.5}
        />
        <Path
          d="M10.095 8.366l5.89-2.343v4.658zm11.78 15.231l-5.89 2.344v-4.659z"
          fillOpacity={0.145}
        />
      </G>
    </G>
  </Svg>
);

export default SvgElix;
