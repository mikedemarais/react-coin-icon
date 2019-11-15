import React from "react";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";

const SvgPnk = props => (
  <Svg width={40} height={40} fill="none" viewBox="0 0 40 40" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20z"
      fill="#A2A1A3"
    />
    <Path
      d="M26.214 12.415l2.66-.605-.346-4.059-14.552-.649 4.707 4.707 7.531.606z"
      fill="#757578"
    />
    <Path
      opacity={0.7}
      d="M26.925 8.29l-1.5 2.744-7.067-3.093 8.567.348z"
      fill="#36383F"
    />
    <Path
      d="M28.528 7.751l5.976 13.07-5.63-1.183-2.66-7.223 2.314-4.664z"
      fill="#6C6D70"
    />
    <Path
      opacity={0.7}
      d="M28.558 9.578l3.569 7.654-4.88-4.962 1.311-2.692z"
      fill="#34363D"
    />
    <Path
      d="M34.504 20.822L26.138 32.72l-2.456-1.572.352-2.608 4.342-8.38 6.128.66z"
      fill="#6C6D70"
    />
    <Path
      opacity={0.7}
      d="M31.75 23.662l-6.748 5.03 1.341 2.622 5.408-7.652z"
      fill="#34363D"
    />
    <Path
      d="M26.138 32.721l-14.698-.89 4.316-5.226 8.278 1.936 2.104 4.18z"
      fill="#55565A"
    />
    <Path
      opacity={0.7}
      d="M23.466 29.37l1.357 2.598-9.067-.581 7.71-2.016z"
      fill="#43444B"
    />
    <Path
      d="M13.976 7.102L5.503 17.686l3.388 2.968 2.26-1.723 6.442-6.415-3.617-5.414z"
      fill="#55565A"
    />
    <Path
      opacity={0.7}
      d="M12.774 9.534l-1.988 8.432-4.013-.85 6.001-7.582z"
      fill="#3B3C43"
    />
    <Path
      d="M5.503 17.686l5.937 14.145 3.888-5.06-4.177-7.84-5.648-1.245z"
      fill="#656569"
    />
    <Path
      opacity={0.7}
      d="M10.543 19.453l.176 9.06L6.512 18.6l4.032.854z"
      fill="#45464D"
    />
    <Path
      d="M34.504 20.822l-8.29-8.407-5.72 7.271 3.54 8.855 10.47-7.72z"
      fill="#656569"
    />
    <Path
      opacity={0.7}
      d="M32.968 20.793l-6.23-6.324-1.644 12.16 7.874-5.836z"
      fill="#23262E"
    />
    <Path
      d="M26.214 12.415L13.976 7.102 11.15 18.931l9.138.438 5.925-6.954z"
      fill="url(#pnk_svg__paint0_linear)"
    />
    <Path
      opacity={0.7}
      d="M23.454 12.33l-8.411-3.623-1.767 7.619 10.178-3.995z"
      fill="#151A22"
    />
    <Path
      d="M11.151 18.93l.289 12.901 12.594-3.29-3.54-9.171-9.343-.44z"
      fill="url(#pnk_svg__paint1_linear)"
    />
    <Path
      opacity={0.7}
      d="M21.322 27.949l-9.141-6.531.22 8.85 8.921-2.32z"
      fill="#23262E"
    />
    <Path
      d="M11.151 18.93l15.063-6.515-2.18 16.126-12.883-9.61z"
      fill="url(#pnk_svg__paint2_linear)"
    />
    <Path
      opacity={0.7}
      d="M24.673 14.636l-1.527 11.561-8.998-6.96 10.525-4.601z"
      fill="#151A22"
    />
    <Defs>
      <LinearGradient
        id="pnk_svg__paint0_linear"
        x1={17.801}
        y1={23.504}
        x2={25.96}
        y2={10.868}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#969598" />
        <Stop offset={0.34} stopColor="#908F92" />
        <Stop offset={0.792} stopColor="#7F7F82" />
        <Stop offset={1} stopColor="#757578" />
      </LinearGradient>
      <LinearGradient
        id="pnk_svg__paint1_linear"
        x1={6.216}
        y1={21.428}
        x2={11.945}
        y2={32.759}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#9E9EA0" />
        <Stop offset={0.276} stopColor="#9B9B9D" />
        <Stop offset={0.494} stopColor="#919194" />
        <Stop offset={0.692} stopColor="#808083" />
        <Stop offset={0.878} stopColor="#69696D" />
        <Stop offset={1} stopColor="#55565A" />
      </LinearGradient>
      <LinearGradient
        id="pnk_svg__paint2_linear"
        x1={11.151}
        y1={28.541}
        x2={26.214}
        y2={28.541}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#A3A2A5" />
        <Stop offset={0.271} stopColor="#9F9EA0" />
        <Stop offset={0.561} stopColor="#929194" />
        <Stop offset={0.859} stopColor="#7C7C80" />
        <Stop offset={1} stopColor="#707073" />
      </LinearGradient>
    </Defs>
  </Svg>
);

export default SvgPnk;
