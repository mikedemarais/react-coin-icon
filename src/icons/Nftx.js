import React from "react";
import Svg, { Defs, LinearGradient, Stop, G, Path } from "react-native-svg";

const SvgNftx = props => (
  <Svg width={40} height={40} viewBox="0 0 40 40" {...props}>
    <Defs>
      <LinearGradient
        x1="74.099%"
        y1="27.95%"
        x2="27.69%"
        y2="72.342%"
        id="nftx_svg__a"
      >
        <Stop stopColor="#FF6D41" offset="9%" />
        <Stop stopColor="#FA297F" offset="50%" />
        <Stop stopColor="#FA297F" offset="100%" />
      </LinearGradient>
      <LinearGradient
        x1="122.488%"
        y1="27.513%"
        x2="29.289%"
        y2="120.71%"
        id="nftx_svg__b"
      >
        <Stop stopColor="#652CB4" offset="0%" />
        <Stop stopColor="#652CB4" stopOpacity={0.82} offset="7%" />
        <Stop stopColor="#652CB4" stopOpacity={0.53} offset="19%" />
        <Stop stopColor="#652CB4" stopOpacity={0.3} offset="30%" />
        <Stop stopColor="#652CB4" stopOpacity={0.14} offset="40%" />
        <Stop stopColor="#652CB4" stopOpacity={0.04} offset="49%" />
        <Stop stopColor="#652CB4" stopOpacity={0} offset="55%" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path
        d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20z"
        fill="#25292E"
      />
      <G fillRule="nonzero">
        <Path
          fill="url(#nftx_svg__a)"
          d="M15.5 0L0 15.32 15.5 30 31 15.32z"
          transform="matrix(-1 0 0 1 36 0)"
        />
        <Path
          d="M28.07 27.414c-.347-.492-.676-.96-1.07-1.414 4.738 1.21 8 3.743 8 6.674 0 .11-.006.218-.014.326-.465-.187-.955-.41-1.476-.682-3.13-1.628-4.357-3.369-5.44-4.904zm-4.63 6.381c-.91-1.262-1.697-2.351-3.92-3.481-2.224-1.13-3.539-1.11-5.06-1.085-1.02.017-2.119.034-3.46-.263 1.635-.91 3.738-1.597 6.114-1.966l3.444 3.413 2.406-2.386c1.716 1.195 2.594 2.41 3.392 3.514.911 1.262 1.698 2.351 3.922 3.481 1.56.793 2.672 1.019 3.722 1.075-.828 1.137-2.223 2.135-4.01 2.903a16.33 16.33 0 01-1.316-.6c-3.01-1.528-4.191-3.163-5.233-4.605z"
          fill="#FFF"
        />
        <Path
          d="M9.323 30.008c1.794-.029 3.827-.06 6.931 1.45s4.322 3.123 5.396 4.547c.94 1.245 1.75 2.32 4.044 3.435.104.051.205.099.306.145-1.6.28-3.223.418-4.848.415-.358 0-.713-.007-1.064-.02-.574-.601-1.02-1.191-1.443-1.751-.94-1.246-1.751-2.321-4.045-3.436-2.293-1.115-3.65-1.094-5.218-1.07-.723.011-1.484.023-2.339-.066A3.424 3.424 0 017 33.115c0-1.115.545-2.168 1.512-3.1.268.001.536-.004.811-.007zM15 40c-3.793-.748-6.737-2.206-8-4 1.085.181 2.319.53 3.788 1.19 2.048.922 3.291 1.883 4.212 2.81z"
          fill="#FFF"
        />
        <Path
          fill="url(#nftx_svg__b)"
          opacity={0.5}
          d="M16 16H0L16 0z"
          transform="matrix(-1 0 0 1 36 0)"
        />
      </G>
    </G>
  </Svg>
);

export default SvgNftx;
