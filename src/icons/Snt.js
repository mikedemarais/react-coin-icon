import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgSnt = props => (
  <Svg width={40} height={40} fill="none" viewBox="0 0 32 32" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20z"
      fill="#4360DF"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.545 18.782a11.43 11.43 0 012.08-.18v.002c1.406 0 2.442.135 3.477.271 1.036.136 2.072.271 3.478.271 3.809 0 6.42-1.555 6.42-4.774 0-3.217-2.175-4.772-5.35-4.772-5.185 0-9.54 3.957-10.105 9.182zM10 25.282c0-3.217 2.611-4.773 6.42-4.773 1.405 0 2.441.136 3.477.272s2.072.271 3.478.271a11.43 11.43 0 002.08-.18c-.565 5.227-4.92 9.183-10.105 9.183-3.175 0-5.35-1.555-5.35-4.773z"
      fill="#fff"
    />
  </Svg>
);

export default SvgSnt;
