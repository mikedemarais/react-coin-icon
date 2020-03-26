import React from "react";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";

const SvgFame = props => (
  <Svg width={40} height={40} fill="none" viewBox="0 0 40 40" {...props}>
    <Path
      d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20z"
      fill="#fff"
    />
    <Path
      d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20z"
      fill="url(#fame_svg__paint0_linear)"
    />
    <Path
      d="M23.988 8.887H16.75c-1.777 0-3.266.53-4.321 1.605-1.047 1.067-1.559 2.56-1.559 4.338v10.765c0 3.24 2.7 5.915 5.963 5.915h.091c2.738-.043 5.091-2.005 5.694-4.61l.017-.074h-.024c3.262 0 5.962-2.675 5.962-5.915v-.1a6.206 6.206 0 00-.318-1.85l-.012-.036.01-.01a5.988 5.988 0 001.668-4.113c0-3.261-2.666-5.915-5.934-5.915h.001z"
      fill="#000"
    />
    <Path
      d="M16.751 10.474h7.237c2.393 0 4.347 1.945 4.347 4.328 0 1.256-.574 2.478-1.543 3.315l-.434.375.299.72c.207.502.33 1.106.33 1.699 0 2.36-1.986 4.327-4.375 4.327h-1.383l-.064.725c-.194 2.203-2.104 3.96-4.331 3.96-2.39 0-4.375-1.968-4.375-4.328V14.83c0-1.39.375-2.482 1.104-3.226.732-.745 1.81-1.13 3.188-1.13z"
      fill="#FF00D6"
    />
    <Defs>
      <LinearGradient
        id="fame_svg__paint0_linear"
        x1={10.002}
        y1={37.318}
        x2={29.998}
        y2={2.603}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#24FF00" />
        <Stop offset={1} stopColor="#F5CDFF" stopOpacity={0.502} />
      </LinearGradient>
    </Defs>
  </Svg>
);

export default SvgFame;
