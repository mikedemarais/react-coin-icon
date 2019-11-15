import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgDai = props => (
  <Svg width={32} height={32} fill="none" viewBox="0 0 32 32" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20z"
      fill="#FEBE44"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M35 19.899L20 4.9 5 19.899l15 14.999 15-15zm-24.274-.981a.241.241 0 01-.18-.401l9.16-10.33a.241.241 0 01.358-.004l9.465 10.331a.241.241 0 01-.177.404h-6.137a.241.241 0 01-.171-.072l-2.98-3.01a.241.241 0 00-.351.01l-2.666 2.991a.24.24 0 01-.18.081h-6.14z"
      fill="#fff"
    />
  </Svg>
);

export default SvgDai;
