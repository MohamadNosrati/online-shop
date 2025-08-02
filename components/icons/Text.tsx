import Svg, { Path, Defs, G, ClipPath, Rect } from "react-native-svg";
import IIconProps from "./props";
export const TextIcon: React.FC<IIconProps> = ({ width, height, color }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 22 22" fill="none">
      <Path
        d="M18 1H4C2.34315 1 1 2.34315 1 4V18C1 19.6569 2.34315 21 4 21H18C19.6569 21 21 19.6569 21 18V4C21 2.34315 19.6569 1 18 1Z"
        stroke={color}
        stroke-width="2"
      />
      <Path
        d="M5.24023 11H16.7782"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M5.24023 6.18945H12.8912"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M5.24023 15.8115H12.8912"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
