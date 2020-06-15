import React from "react";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";

const SvgHex = props => (
  <Svg width={40} height={40} fill="none" viewBox="0 0 40 40" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20z"
      fill="url(#hex_svg__paint0_linear)"
    />
    <Path
      d="M12.846 31.345l-1.828-3.177a.424.424 0 010-.372l2.029-3.527a.423.423 0 01.325-.188h4.059a.422.422 0 01.324.188l2.03 3.527a.426.426 0 010 .376l-2.03 3.526a.422.422 0 01-.319.188h-3.653a1.226 1.226 0 01-.937-.541zm13.182-7.258l-4.044-7.027a.574.574 0 00-.443-.256h-8.088a.577.577 0 00-.444.256l-4.044 7.027a.578.578 0 000 .515l1.186 2.06 2.074-3.6a.656.656 0 01.513-.297h5.327a.657.657 0 01.513.296l2.665 4.631a.661.661 0 010 .595l-2.074 3.597h2.369a.573.573 0 00.443-.257l4.047-7.025a.577.577 0 000-.515zm7.339-4.648L27.16 8.655a1.228 1.228 0 00-.957-.555H13.797a1.223 1.223 0 00-.957.555L6.632 19.439a1.234 1.234 0 000 1.109l1.423 2.47 4.123-7.166a.81.81 0 01.634-.367h9.36a.807.807 0 01.634.367l4.683 8.137a.813.813 0 010 .733l-4.12 7.162h2.837a1.224 1.224 0 00.957-.555l6.206-10.784a1.234 1.234 0 000-1.106h-.002z"
      fill="#fff"
    />
    <Defs>
      <LinearGradient
        id="hex_svg__paint0_linear"
        x1={10.001}
        y1={39.727}
        x2={34.147}
        y2={3.001}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FFDC00" />
        <Stop offset={1} stopColor="#F0F" />
      </LinearGradient>
    </Defs>
  </Svg>
);

export default SvgHex;
