import React from "react";
import Svg, {
  Path,
  Mask,
  G,
  Defs,
  LinearGradient,
  Stop
} from "react-native-svg";

const SvgMana = props => (
  <Svg width={32} height={32} fill="none" viewBox="0 0 32 32" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20z"
      fill="url(#mana_svg__paint0_linear)"
    />
    <Mask
      id="mana_svg__a"
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={40}
      height={40}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20z"
        fill="#fff"
      />
    </Mask>
    <G mask="url(#mana_svg__a)">
      <Path
        d="M14.17 13l-1.61 15h14.11l-12.5-15z"
        fill="url(#mana_svg__paint1_linear)"
      />
      <Path d="M1.67 28h12.5V13L1.67 28z" fill="#fff" />
      <Path
        d="M2 32a22.812 22.812 0 004.75 4h28.5A22.812 22.812 0 0040 32H2z"
        fill="#FC9965"
      />
      <Path
        d="M5 36c4.314 3.138 9.688 5 15.5 5 5.813 0 11.186-1.862 15.5-5H5z"
        fill="#FF2D55"
      />
      <Path
        d="M26.83 21l-1.562 11H36l-9.17-11z"
        fill="url(#mana_svg__paint2_linear)"
      />
      <Path
        d="M25.829 28H-2.16c.69 1.43 1.569 2.77 2.592 4H25.84v-4h-.011z"
        fill="#FFBC5B"
      />
      <Path d="M17.67 32h9.16V21l-9.16 11z" fill="#fff" />
      <Path
        d="M26.83 18a5 5 0 100-10 5 5 0 000 10zM14.17 10a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
        fill="#FFC95B"
      />
    </G>
    <Defs>
      <LinearGradient
        id="mana_svg__paint0_linear"
        x1={20}
        y1={-8.284}
        x2={-8.284}
        y2={20}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FF2D55" />
        <Stop offset={1} stopColor="#FFBC5B" />
      </LinearGradient>
      <LinearGradient
        id="mana_svg__paint1_linear"
        x1={12.555}
        y1={13}
        x2={12.555}
        y2={28}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#A524B3" />
        <Stop offset={1} stopColor="#FF2D55" />
      </LinearGradient>
      <LinearGradient
        id="mana_svg__paint2_linear"
        x1={25.265}
        y1={21}
        x2={25.265}
        y2={32}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#A524B3" />
        <Stop offset={1} stopColor="#FF2D55" />
      </LinearGradient>
    </Defs>
  </Svg>
);

export default SvgMana;
