import React from "react";
import Svg, { G, Circle, Path } from "react-native-svg";

const SvgLpt = props => (
  <Svg width={32} height={32} viewBox="0 0 32 32" {...props}>
    <G fill="none" fillRule="evenodd">
      <Circle fill="#03EB88" cx={16} cy={16} r={16} />
      <Path
        d="M22.204 17.094v-2.948h2.948v2.948h-2.948zm-13.004 0v-2.948h2.948v2.948H9.2zm0-6.946V7.2h2.948v2.948H9.2zM9.2 24v-2.948h2.948V24H9.2zm6.502-10.379v-2.948h2.948v2.948h-2.948zm0 6.946V17.62h2.948v2.948h-2.948z"
        fill="#FFF"
      />
    </G>
  </Svg>
);

export default SvgLpt;
