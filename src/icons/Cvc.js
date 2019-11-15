import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgCvc = props => (
  <Svg width={40} height={40} fill="none" viewBox="0 0 40 40" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20z"
      fill="#3AB03E"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M32.318 13.336A14 14 0 0020 6C12.28 6 6 12.28 6 20s6.28 14 14 14a14.056 14.056 0 0012.698-8.1 1.731 1.731 0 00-2.159-2.356c-.43.157-.781.479-.974.895a10.543 10.543 0 11-.286-9.456 1.728 1.728 0 103.039-1.647zm-9.731 4.84c.198-1.757-1.335-3.12-3.108-2.797a2.556 2.556 0 00-2.065 2.193c-.106.852.232 1.7.895 2.245v4.85h3.382v-4.855c.498-.41.819-.996.896-1.636z"
      fill="#fff"
    />
  </Svg>
);

export default SvgCvc;
