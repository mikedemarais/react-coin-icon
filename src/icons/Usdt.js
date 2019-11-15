import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgUsdt = props => (
  <Svg width={40} height={40} fill="none" viewBox="0 0 32 32" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20z"
      fill="#22A079"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22.468 14.36v2.975l.002.001c5.52.255 9.67 1.35 9.67 2.66s-4.15 2.405-9.67 2.66v9.53h-4.92v-9.53c-5.528-.255-9.688-1.35-9.688-2.662 0-1.312 4.158-2.407 9.688-2.661V14.36h-6.804V9.827h18.526v4.533h-6.804zm.002 7.486v.003-.002c4.875-.217 8.515-1.07 8.515-2.084s-3.638-1.866-8.514-2.083v3.322c-.14.013-.903.076-2.42.076a37.83 37.83 0 01-2.499-.076V17.68c-4.885.217-8.532 1.066-8.532 2.084s3.647 1.87 8.532 2.086v-.004c.315.016 1.208.052 2.478.052 1.588 0 2.301-.043 2.44-.052z"
      fill="#fff"
    />
  </Svg>
);

export default SvgUsdt;
