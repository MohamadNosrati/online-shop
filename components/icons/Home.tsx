import Svg, { ClipPath, Defs, G, Path, Rect } from "react-native-svg";
import IIconProps from "./props";

export const HomeIcon: React.FC<IIconProps> = ({ width, height, color }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Rect opacity="0.01" width="24" height="24" fill={color} />
      <G clipPath="url(#clip0_2_3444)">
        <G clipPath="url(#clip1_2_3444)">
          <Path
            d="M21.9072 9.23047V20.7021C21.9072 21.2616 21.3724 21.8818 20.4961 21.8818H3.62012C2.74384 21.8818 2.20899 21.2616 2.20898 20.7021V9.23047L12.0576 2.30371L21.9072 9.23047Z"
            stroke="#004CFF"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <Path
            d="M8.85693 20.925V10.917H15.2587V20.925"
            stroke="#004CFF"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </G>
      </G>
      <Defs>
        <ClipPath id="clip0_2_3444">
          <Rect
            width="21.6982"
            height="21.8012"
            fill="white"
            transform="translate(1.20898 1.08105)"
          />
        </ClipPath>
        <ClipPath id="clip1_2_3444">
          <Rect
            width="21.6982"
            height="21.8012"
            fill="white"
            transform="translate(1.20898 1.08105)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
