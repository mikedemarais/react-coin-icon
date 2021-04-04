import React from "react";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";

const SvgAyfi = props => (
  <Svg width={40} height={40} fill="none" viewBox="0 0 40 40" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20z"
      fill="url(#ayfi_svg__paint0_linear)"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 38c9.941 0 18-8.059 18-18S29.941 2 20 2 2 10.059 2 20s8.059 18 18 18z"
      fill="#fff"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 36c8.837 0 16-7.163 16-16S28.837 4 20 4 4 11.163 4 20s7.163 16 16 16z"
      fill="url(#ayfi_svg__paint1_linear)"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.246 13.539a.25.25 0 01.25-.25h1.008a.25.25 0 01.25.25v12.677a.25.25 0 01-.25.25h-1.008a.25.25 0 01-.25-.25V13.54z"
      fill="#fff"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.39 19.488v-1.575A3.653 3.653 0 0120 10.98c2.265 0 3.9 1.636 3.9 3.652 0 .509-.104.993-.355 1.568l-.57-1.854a.25.25 0 00-.313-.165l-.824.257a.25.25 0 00-.167.303l1.014 3.86a.25.25 0 00.328.171l3.94-1.45c.135-.048.2-.2.145-.331l-.347-.819a.25.25 0 00-.312-.139l-1.437.492c.3-.65.359-1.129.359-1.893 0-2.824-2.29-5.113-5.361-5.113a5.113 5.113 0 00-1.61 9.968zm3.22.78v1.574A3.653 3.653 0 0120 28.774c-2.265 0-3.9-1.636-3.9-3.652 0-.509.104-.993.354-1.568l.57 1.854a.25.25 0 00.314.165l.824-.257a.25.25 0 00.167-.303l-1.014-3.86a.25.25 0 00-.328-.171l-3.94 1.45a.25.25 0 00-.145.332l.347.818a.25.25 0 00.311.139l1.438-.492c-.3.65-.359 1.129-.359 1.893 0 2.824 2.29 5.113 5.361 5.113a5.113 5.113 0 001.61-9.968z"
      fill="#fff"
    />
    <Defs>
      <LinearGradient
        id="ayfi_svg__paint0_linear"
        x1={36.28}
        y1={9.08}
        x2={6.52}
        y2={34.12}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#B6509E" />
        <Stop offset={1} stopColor="#2EBAC6" />
      </LinearGradient>
      <LinearGradient
        id="ayfi_svg__paint1_linear"
        x1={-12}
        y1={20}
        x2={20}
        y2={52}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#0077FC" />
        <Stop offset={1} stopColor="#095EB5" />
      </LinearGradient>
    </Defs>
  </Svg>
);

export default SvgAyfi;
