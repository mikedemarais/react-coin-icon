import React from "react";
import Svg, { G, Circle, Path } from "react-native-svg";

const SvgX = props => (
  <Svg width={32} height={32} viewBox="0 0 32 32" {...props}>
    <G fill="none" fillRule="evenodd">
      <Circle cx={16} cy={16} r={16} fill="#3B5998" fillRule="nonzero" />
      <G fill="#FFF">
        <Path d="M14.116 6.01h1.88v5.882l-1.88-1.963z" />
        <Path d="M6.011 7.993h4.949c1.677 1.755 3.361 3.507 5.038 5.266.971-1.009 1.939-2.025 2.906-3.037.715-.741 1.427-1.486 2.14-2.23h4.937c-2.304 2.33-4.605 4.662-6.91 6.99-.242.243-.485.488-.722.734.058.062.12.123.172.189l6.771 6.846.691.696h-3.83c-.099 0-.198.006-.295-.007-.273-.008-.547.004-.82-.006-.495-.511-.984-1.029-1.479-1.542-.973-1.012-1.942-2.03-2.915-3.044-.216-.224-.427-.454-.648-.672-.47.5-.952.993-1.425 1.493l-2.677 2.794c-.312.325-.62.652-.934.971-.27.008-.542 0-.814.004-.155.019-.312.006-.467.01H6.01l7.268-7.35c.125-.126.249-.253.37-.382L6.01 7.993z" />
        <Path d="M16 19.531c.626.663 1.26 1.319 1.888 1.98.004 1.307 0 2.612 0 3.92h-1.89c0-1.967 0-3.933.004-5.9H16z" />
      </G>
    </G>
  </Svg>
);

export default SvgX;