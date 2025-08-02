import Svg, { Path, Defs, G, ClipPath, Rect } from "react-native-svg";
import IIconProps from "./props";
export const BagIcon: React.FC<IIconProps> = ({ width, height, color }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Rect opacity="0.01" width="24" height="24" fill="white" />
      <G clipPath="url(#clip0_2_3433)">
        <G clipPath="url(#clip1_2_3433)">
          <Path
            d="M18.9692 2L22.1274 5.7627V20.7998C22.1274 21.36 21.5821 22 20.6665 22H3.43701C2.52167 21.9998 1.97607 21.3599 1.97607 20.7998V5.7627L5.13428 2H18.9692Z"
            stroke={color}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <Path
            d="M2.57129 5.40039H21.6369"
            stroke={color}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <Path
            d="M16.3668 9.7998C16.3668 12.2299 14.435 14.1998 12.052 14.1998C9.66908 14.1998 7.7373 12.2299 7.7373 9.7998"
            stroke={color}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </G>
      </G>
      <Defs>
        <ClipPath id="clip0_2_3433">
          <Rect
            width="22.1519"
            height="21.9999"
            fill="white"
            transform="translate(0.976074 1)"
          />
        </ClipPath>
        <ClipPath id="clip1_2_3433">
          <Rect
            width="22.1519"
            height="21.9999"
            fill="white"
            transform="translate(0.976074 1)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
