import React from "react";
import Svg, { G, Circle, Path } from "svgs";
const Etc = props => (
  <Svg viewBox="0 0 32 32" width={32} height={32} {...props}>
    <G fill="none" fillRule="evenodd">
      <Circle cx={16} cy={16} r={16} fill="#328332" />
      <G fill="#FFF">
        <Path
          fillRule="nonzero"
          d="M15.989 16.553l-6.721-.577 6.72-3.802v4.379zm0 4.46v6.94C13.652 24.315 11.076 20.311 9 17.07c2.45 1.38 5.008 2.823 6.989 3.944zm0-10.068L9 14.845 15.989 4v6.945z"
        />
        <Path
          fillOpacity={0.601}
          fillRule="nonzero"
          d="M22.71 15.976l-6.721.577v-4.379l6.72 3.802zm-6.721 5.038c1.98-1.12 4.537-2.564 6.988-3.944-2.076 3.242-4.652 7.246-6.988 10.882v-6.938zm0-10.069V4l6.988 10.845-6.988-3.9z"
        />
        <Path opacity={0.2} d="M15.989 16.553l6.72-.577-6.72 3.775z" />
        <Path opacity={0.603} d="M15.988 16.553l-6.721-.577 6.721 3.775z" />
      </G>
    </G>
  </Svg>
);

export default Etc;
