import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgDgd = props => (
  <Svg width={32} height={32} fill="none" viewBox="0 0 32 32" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20z"
      fill="#E1AA3F"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.922 16.644H7.5V14.3h7.422v2.344zm4.297-2.344v10.938H7.5v-6.79h9.375V14.3h2.344zm-2.344 8.594v-2.101H9.844v2.1h7.031zm3.906-8.594H32.5v2.344h-9.375v6.25h7.031v-2.101h-5.078v-2.344H32.5v6.788H20.781V14.3z"
      fill="#fff"
    />
  </Svg>
);

export default SvgDgd;
