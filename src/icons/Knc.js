import React from "react";
import Svg, { G, Circle, Path } from "react-native-svg";

const SvgKnc = props => (
  <Svg width={32} height={32} viewBox="0 0 32 32" {...props}>
    <G fill="none" fillRule="evenodd">
      <Circle fill="#31CB9E" cx={16} cy={16} r={16} />
      <Path
        d="M15.281 4.047L8.466 9.254a1.181 1.181 0 0 0-.466.947v11.04c0 .368.17.723.466.946l6.815 5.201a1.19 1.19 0 0 0 1.438 0l6.815-5.207c.295-.225.468-.575.466-.947v-11.04a1.19 1.19 0 0 0-.466-.946l-6.815-5.201a1.171 1.171 0 0 0-1.438 0zm-1.26 12.558l8.758 5.03-6.599 5.037-2.16-10.067zm2.166-11.841L22.78 9.8l-8.759 5.03 2.167-10.066zM14.27 15.718l8.837-5.083v10.158l-8.837-5.075zM8.893 10.05l6.276-4.793-2.245 10.46L15.17 26.18l-6.276-4.794V10.05z"
        fill="#FFF"
        fillRule="nonzero"
      />
    </G>
  </Svg>
);

export default SvgKnc;
