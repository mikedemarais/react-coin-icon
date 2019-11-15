import React from "react";
import Svg, {
  Defs,
  LinearGradient,
  Stop,
  G,
  Circle,
  Path
} from "react-native-svg";

const SvgAeur = props => (
  <Svg width={40} height={40} viewBox="0 0 32 32" {...props}>
    <Defs>
      <LinearGradient x1="50%" y1="0%" x2="50%" y2="143.239%" id="aeur_svg__a">
        <Stop stopColor="#FFF" offset="0%" />
        <Stop stopColor="#FFF" stopOpacity={0.83} offset="3%" />
        <Stop stopColor="#FFF" stopOpacity={0.66} offset="7%" />
        <Stop stopColor="#FFF" stopOpacity={0.5} offset="11%" />
        <Stop stopColor="#FFF" stopOpacity={0.37} offset="15%" />
        <Stop stopColor="#FFF" stopOpacity={0.25} offset="19%" />
        <Stop stopColor="#FFF" stopOpacity={0.16} offset="25%" />
        <Stop stopColor="#FFF" stopOpacity={0.09} offset="30%" />
        <Stop stopColor="#FFF" stopOpacity={0.04} offset="37%" />
        <Stop stopColor="#FFF" stopOpacity={0.01} offset="47%" />
        <Stop stopColor="#FFF" stopOpacity={0} offset="100%" />
      </LinearGradient>
    </Defs>
    <G fill="none">
      <Circle cx={16} cy={16} r={16} fill="#051D2D" />
      <G transform="translate(9 6)" fill="url(#aeur_svg__a)">
        <Path d="M6.993 13.986a6.993 6.993 0 116.993-6.993 7.002 7.002 0 01-6.993 6.993zM7 6.951A.049.049 0 107.049 7a.055.055 0 00-.05-.05z" />
        <Path d="M6.993 20.986a6.993 6.993 0 116.993-6.993 7.002 7.002 0 01-6.993 6.993zM7 13.951a.049.049 0 10.049.049.055.055 0 00-.05-.05z" />
      </G>
    </G>
  </Svg>
);

export default SvgAeur;
