import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgMkr = props => (
  <Svg width={40} height={40} fill="none" viewBox="0 0 32 32" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20z"
      fill="#30BD9F"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22.964 18.688l7.973-5.293-.004 12.823a.782.782 0 001.563 0l.004-12.956a1.492 1.492 0 00-2.317-1.243L22.1 17.385a2.202 2.202 0 00-.985 1.835l-.001 6.998a.782.782 0 001.563 0l.001-6.998a.64.64 0 01.286-.532zm-5.928 0a.64.64 0 01.285.532l-.001 6.998a.782.782 0 001.563 0l.001-6.998c0-.737-.369-1.426-.983-1.834l-8.084-5.367A1.492 1.492 0 007.5 13.262v12.956a.782.782 0 001.564 0V13.395l7.972 5.293z"
      fill="#fff"
    />
  </Svg>
);

export default SvgMkr;
