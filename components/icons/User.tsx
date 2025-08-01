import Svg, { Path, Defs, G, ClipPath, Rect } from "react-native-svg";
import IIconProps from "./props";
export const UserIcon: React.FC<IIconProps> = ({ width, height, color }) => {
  return (
    <Svg
      width="24"
      height="32"
      viewBox="0 0 24 32"
      fill="none"
    >
      <Path
        d="M7.5 30H16.5"
        stroke="black"
        stroke-width="3"
        stroke-linecap="round"
      />
      <Path
        d="M11.6729 2C13.7013 2 15.3457 3.64439 15.3457 5.67285C15.3457 7.70132 13.7013 9.3457 11.6729 9.3457C9.64439 9.34569 8 7.70131 8 5.67285C8.00001 3.6444 9.6444 2.00001 11.6729 2Z"
        stroke="black"
        stroke-width="2"
      />
      <G clipPath="url(#clip0_2_3458)">
        <Path
          d="M21.921 24.0643V19.6733C21.879 18.3937 21.331 17.183 20.3974 16.307C19.4637 15.4309 18.2207 14.961 16.941 15.0003H6.98C5.7003 14.961 4.45725 15.4309 3.52362 16.307C2.58999 17.183 2.04204 18.3937 2 19.6733V24.0643"
          stroke="black"
          stroke-width="2"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_2_3458">
          <Rect
            width="21.921"
            height="10.064"
            fill="white"
            transform="translate(1 14)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
