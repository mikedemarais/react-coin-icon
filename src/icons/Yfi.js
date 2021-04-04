import React from "react";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";

const SvgYfi = props => (
  <Svg width={40} height={40} fill="none" viewBox="0 0 40 40" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20z"
      fill="url(#yfi_svg__paint0_linear)"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.057 11.86a.25.25 0 01.25-.25h1.386a.25.25 0 01.25.25v15.973a.25.25 0 01-.25.25h-1.386a.25.25 0 01-.25-.25V11.86z"
      fill="#fff"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.988 19.36v-1.97A4.566 4.566 0 0120 8.727c2.831 0 4.876 2.045 4.876 4.565 0 .636-.13 1.241-.444 1.96l-.731-2.377a.25.25 0 00-.314-.165l-1.146.358a.25.25 0 00-.168.302l1.3 4.95a.25.25 0 00.329.172l5.052-1.859c.134-.049.2-.2.144-.332l-.482-1.137a.25.25 0 00-.311-.139l-1.852.634c.375-.813.448-1.411.448-2.367C26.701 9.761 23.84 6.9 20 6.9a6.392 6.392 0 00-2.012 12.46zm4.024.974v1.969A4.567 4.567 0 0120 30.968c-2.831 0-4.876-2.045-4.876-4.566 0-.635.13-1.24.444-1.96l.731 2.378a.25.25 0 00.314.165l1.146-.358a.25.25 0 00.168-.302l-1.3-4.95a.25.25 0 00-.329-.172l-5.052 1.859a.25.25 0 00-.144.332l.482 1.137a.25.25 0 00.312.139l1.851-.634c-.374.813-.448 1.411-.448 2.366 0 3.53 2.861 6.392 6.701 6.392a6.392 6.392 0 002.012-12.46z"
      fill="#fff"
    />
    <Defs>
      <LinearGradient
        id="yfi_svg__paint0_linear"
        x1={-20}
        y1={20}
        x2={20}
        y2={60}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#0077FC" />
        <Stop offset={1} stopColor="#095EB5" />
      </LinearGradient>
    </Defs>
  </Svg>
);

export default SvgYfi;
