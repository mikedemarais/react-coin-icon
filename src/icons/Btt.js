import React from "react";
import Svg, { G, Circle, Path } from "react-native-svg";

const SvgBtt = props => (
  <Svg width={32} height={32} viewBox="0 0 32 32" {...props}>
    <G fill="none">
      <Circle cx={16} cy={16} r={16} fill="#000" />
      <G fill="#FFF">
        <Path d="M27.743 13.539a11.886 11.886 0 00-.698-2.241 12.102 12.102 0 00-1.102-2.033 11.864 11.864 0 00-1.457-1.763 11.864 11.864 0 00-1.764-1.457 12.518 12.518 0 00-2.032-1.102 11.886 11.886 0 00-9.282 0 11.864 11.864 0 00-3.796 2.56 11.864 11.864 0 00-1.457 1.762 12.518 12.518 0 00-1.102 2.033 11.886 11.886 0 000 9.282c.294.71.674 1.383 1.102 2.032a11.88 11.88 0 001.457 1.764 11.864 11.864 0 001.764 1.457c.636.428 1.322.796 2.032 1.102a11.886 11.886 0 009.282 0c.71-.294 1.383-.674 2.032-1.102a11.864 11.864 0 001.764-1.457 11.864 11.864 0 001.457-1.764c.428-.636.796-1.322 1.102-2.032a11.886 11.886 0 00.698-7.041zM16.06 26.384c-5.767 0-10.432-4.678-10.432-10.433S10.306 5.518 16.06 5.518c5.755 0 10.433 4.678 10.433 10.433S21.816 26.384 16.06 26.384z" />
        <Path d="M16.245 25.478h.282c.049 0 .097 0 .146-.013h.013c.049 0 .085 0 .134-.012h.037c.037 0 .074 0 .11-.012h.037c.037 0 .074-.012.123-.012h.024c.049 0 .098-.013.147-.013.049 0 .086-.012.135-.024h.024c.037 0 .074-.012.11-.012h.025c.049-.013.086-.013.135-.025.097-.012.195-.037.281-.061h.025c.036-.012.085-.012.122-.025h.012c.098-.024.184-.049.282-.073a10.948 10.948 0 01-2.73-.257c-1.348-.294-2.633-.82-3.723-1.727a7.544 7.544 0 01-2.718-5.865 7.127 7.127 0 011.677-4.555c1.396-1.653 3.38-2.523 5.412-2.572h.282V8.592h-.318a9.186 9.186 0 00-1.837.22 8.83 8.83 0 00-1.763.6c-.576.27-1.115.6-1.617.98a8.618 8.618 0 00-1.408 1.347 8.333 8.333 0 00-1.016 1.506 8.61 8.61 0 00-.674 1.628 8.9 8.9 0 00-.33 1.703l-.037.538v.318c.012.625.086 1.237.22 1.837.135.613.343 1.2.6 1.764.307.673.858 1.665 1.678 2.412a9.47 9.47 0 005.877 2.033h.221z" />
        <Path d="M18.914 23.91a12.454 12.454 0 01-1.8-.196c-2.522-.453-4.69-1.996-5.485-4.322-.968-2.829.514-5.89 3.33-6.82a5.21 5.21 0 011.665-.27c.723 0 1.445.147 2.107.416l.685-1.457a13.136 13.136 0 00-.624-.232 7.213 7.213 0 00-2.168-.331 6.87 6.87 0 00-2.167.355 6.81 6.81 0 00-2.412 1.396 7.02 7.02 0 00-.918.992 6.66 6.66 0 00-.698 1.139 6.904 6.904 0 00-.686 2.584c-.061.93.061 1.86.367 2.742a6.77 6.77 0 001.47 2.437c.6.649 1.298 1.139 2.142 1.592.882.465 1.972.71 3.11.87.735.097 1.715.122 2.29.122.502-.184.71-.27.98-.38.233-.11.465-.22.698-.355.233-.135.27-.16.661-.416a.68.68 0 00.098-.074c-1.347.233-1.69.22-2.645.208z" />
        <Path d="M21.927 22.086c-.38.024-.919.06-1.531.06-1.09 0-2.425-.097-3.563-.477-1.764-.587-3.429-2.093-3.429-3.955a3.352 3.352 0 013.355-3.355c1.261 0 2.351.698 2.927 1.714l1.457-.722a4.734 4.734 0 00-.87-1.163 4.966 4.966 0 00-7.029 0 4.966 4.966 0 00-1.457 3.514 4.9 4.9 0 00.43 1.984c.256.563.612 1.09 1.065 1.58.796.856 1.885 1.542 3.049 1.934 1.114.367 2.755.502 4.347.392.44-.037.771-.074 1.334-.196a9.188 9.188 0 001.47-1.457c-.38.037-1.078.11-1.555.147z" />
      </G>
    </G>
  </Svg>
);

export default SvgBtt;