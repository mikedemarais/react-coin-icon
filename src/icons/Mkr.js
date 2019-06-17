import React from "react";
import Svg, { G, Circle, Path } from "react-native-svg";

const SvgMkr = props => (
  <Svg width={32} height={32} viewBox="0 0 32 32" {...props}>
    <G fill="none" fillRule="evenodd">
      <Circle fill="#30BD9F" cx={16} cy={16} r={16} />
      <Path
        d="M13.857 15.376a.511.511 0 0 0-.228-.426L7.25 10.716l.001 10.259a.625.625 0 1 1-1.25 0L6 10.609a1.193 1.193 0 0 1 1.854-.994l6.467 4.293c.491.327.786.878.786 1.468v5.599a.625.625 0 1 1-1.251 0v-5.599zm10.893-4.66l-6.38 4.234a.512.512 0 0 0-.228.426l-.002 5.599a.625.625 0 0 1-1.25 0l.001-5.6c0-.59.296-1.14.788-1.467l6.466-4.293A1.194 1.194 0 0 1 26 10.61l-.003 10.365a.625.625 0 1 1-1.25 0l.003-10.26z"
        fill="#FFF"
        fillRule="nonzero"
      />
    </G>
  </Svg>
);

export default SvgMkr;
