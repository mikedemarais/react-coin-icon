import React from "react";
import Svg, { G, Circle, Path } from "react-native-svg";

const SvgVrc = props => (
  <Svg height={40} width={40} viewBox="0 0 40 40" {...props}>
    <G fill="none" fillRule="evenodd">
      <Circle cx={16} cy={16} fill="#418bca" r={16} />
      <Path
        d="M20.265 8H25l-9 18L7 8h4.704l4.327 9.113zM16 12.959c-.788 0-1.427-.656-1.427-1.465s.639-1.466 1.427-1.466 1.427.657 1.427 1.466-.64 1.465-1.427 1.465zm6.465 4.04c.788 0 1.427.657 1.426 1.466 0 .81-.638 1.465-1.426 1.465-.788 0-1.427-.656-1.427-1.465S21.677 17 22.465 17z"
        fill="#fff"
        fillRule="nonzero"
      />
    </G>
  </Svg>
);

export default SvgVrc;
