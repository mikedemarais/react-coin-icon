import React from "react";
import Svg, {
  Defs,
  LinearGradient,
  Stop,
  Circle,
  G,
  Mask,
  Use,
  Path
} from "react-native-svg";

const SvgMana = props => (
  <Svg width={32} height={32} viewBox="0 0 32 32" {...props}>
    <Defs>
      <LinearGradient
        x1="85.355%"
        y1="14.645%"
        x2="14.645%"
        y2="85.355%"
        id="mana_svg__b"
      >
        <Stop stopColor="#FF2D55" offset="0%" />
        <Stop stopColor="#FFBC5B" offset="100%" />
      </LinearGradient>
      <Circle id="mana_svg__a" cx={16} cy={16} r={16} />
      <LinearGradient
        x1="49.966%"
        y1="0%"
        x2="49.966%"
        y2="100%"
        id="mana_svg__c"
      >
        <Stop stopColor="#A524B3" offset="0%" />
        <Stop stopColor="#FF2D55" offset="100%" />
      </LinearGradient>
      <LinearGradient
        x1="49.966%"
        y1="0%"
        x2="49.966%"
        y2="100%"
        id="mana_svg__e"
      >
        <Stop stopColor="#A524B3" offset="0%" />
        <Stop stopColor="#FF2D55" offset="100%" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Mask id="mana_svg__d" fill="#fff">
        <Use xlinkHref="#mana_svg__a" />
      </Mask>
      <Use fill="url(#mana_svg__b)" xlinkHref="#mana_svg__a" />
      <Path
        fill="url(#mana_svg__c)"
        fillRule="nonzero"
        mask="url(#mana_svg__d)"
        d="M11.336 10.4l-1.288 12h11.288z"
      />
      <Path
        fill="#FFF"
        fillRule="nonzero"
        mask="url(#mana_svg__d)"
        d="M1.336 22.4h10v-12z"
      />
      <Path
        d="M1.6 25.6a18.25 18.25 0 0 0 3.8 3.2h22.8a18.25 18.25 0 0 0 3.8-3.2H1.6z"
        fill="#FC9965"
        fillRule="nonzero"
        mask="url(#mana_svg__d)"
      />
      <Path
        d="M4 28.8c3.451 2.51 7.75 4 12.4 4s8.949-1.49 12.4-4H4z"
        fill="#FF2D55"
        fillRule="nonzero"
        mask="url(#mana_svg__d)"
      />
      <Path
        fill="url(#mana_svg__e)"
        fillRule="nonzero"
        mask="url(#mana_svg__d)"
        d="M21.464 16.8l-1.25 8.8H28.8z"
      />
      <Path
        d="M20.663 22.4H-1.728a15.639 15.639 0 0 0 2.074 3.2h20.326v-3.2h-.009z"
        fill="#FFBC5B"
        fillRule="nonzero"
        mask="url(#mana_svg__d)"
      />
      <Path
        fill="#FFF"
        fillRule="nonzero"
        mask="url(#mana_svg__d)"
        d="M14.136 25.6h7.328v-8.8z"
      />
      <Circle
        fill="#FFC95B"
        fillRule="nonzero"
        mask="url(#mana_svg__d)"
        cx={21.464}
        cy={10.4}
        r={4}
      />
      <Circle
        fill="#FFC95B"
        fillRule="nonzero"
        mask="url(#mana_svg__d)"
        cx={11.336}
        cy={6}
        r={2}
      />
    </G>
  </Svg>
);

export default SvgMana;
