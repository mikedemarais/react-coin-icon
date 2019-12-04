import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgMkr = props => (
  <Svg width={40} height={40} fill="none" viewBox="0 0 40 40" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20z"
      fill="#1AAB9B"
    />
    <Path
      d="M18.578 19.952l-9.26-6.965c-.749-.57-1.818-.036-1.818.905v11.691h1.946V15.518l7.635 5.745v4.32h1.946v-4.726a1.108 1.108 0 00-.45-.905zm12.111-6.972l-9.26 6.972a1.134 1.134 0 00-.456.905v4.726h1.946v-4.32l7.635-5.745v10.065H32.5v-11.69a1.13 1.13 0 00-1.81-.913z"
      fill="#fff"
    />
  </Svg>
);

export default SvgMkr;
