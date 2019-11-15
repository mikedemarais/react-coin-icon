import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgMatic = props => (
  <Svg width={32} height={32} fill="none" viewBox="0 0 32 32" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20z"
      fill="#CFE7FF"
    />
    <Path
      d="M17.313 18.129l2.685 5.955 3.996-2.304.003-4.612-6.684.961z"
      fill="#2BBDF7"
    />
    <Path
      d="M29.158 13.71l-2.494-.94-2.666-.214v14.33l4 2.304 3.156-6.46-1.99-6.247-.006-2.773z"
      fill="#2891F9"
    />
    <Path
      d="M28.924 12.557l-.926 2.304-.001 14.328 4-2.305V12.557h-3.073z"
      fill="#2BBDF7"
    />
    <Path d="M27.997 10.25l-4 2.307 4 2.305 4-2.305-4-2.306z" fill="#2891F9" />
    <Path d="M27.997 10.25l-4 2.307 4 2.305 4-2.305-4-2.306z" fill="#2B6DEF" />
    <Path
      d="M16 14.995l-7.999-2.44v14.328L12 29.188l1.143-7.929 2.858.52 4 2.302v-4.61l-4-4.476z"
      fill="#2891F9"
    />
    <Path
      d="M12.001 10.25L8 12.556l11.997 6.918 1.813-1.045 2.187-1.261L12 10.25z"
      fill="#2891F9"
    />
    <Path
      d="M12.001 10.25L8 12.556l11.997 6.918 1.813-1.045 2.187-1.261L12 10.25z"
      fill="#2B6DEF"
    />
    <Path d="M12.001 19.472v9.716l4-2.305v-5.106l-4-2.305z" fill="#2BBDF7" />
  </Svg>
);

export default SvgMatic;
