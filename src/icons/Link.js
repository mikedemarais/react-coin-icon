import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgLink = props => (
  <Svg width={32} height={32} fill="none" viewBox="0 0 32 32" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20z"
      fill="#1A56F0"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.566 7.9L20 6.5l2.434 1.4 6.632 3.833 2.434 1.4v13.264l-2.434 1.4-6.571 3.833-2.434 1.4-2.434-1.4-6.693-3.834-2.434-1.4V13.133l2.434-1.4L17.566 7.9zm-4.198 8.031v7.667L20 27.43l6.632-3.833V15.93L20 12.098l-6.632 3.833z"
      fill="#fff"
    />
  </Svg>
);

export default SvgLink;
