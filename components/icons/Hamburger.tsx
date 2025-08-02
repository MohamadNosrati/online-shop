import IIconProps from "./props";
import Svg, { Path, G, ClipPath, Defs, Rect } from "react-native-svg";


export const HamburgerIcon: React.FC<IIconProps> = ({
  width,
  height,
  color,
}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 13 8"
      fill="none"

    >
      <Path d="M6.96777 1H11.9678" stroke="#004CFF" stroke-linecap="round" />
      <Path d="M1 4H12" stroke="#004CFF" stroke-linecap="round" />
      <Path d="M1 7H12" stroke="#004CFF" stroke-linecap="round" />
    </Svg>
  );
};