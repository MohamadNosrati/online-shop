import { View } from "react-native";
import { ViewProps } from "react-native/Libraries/Components/View/ViewPropTypes";

const CustomView: React.FC<ViewProps> = ({ children, ...props }) => {
  return (
    <View className={`bg-white ${props.className}`} {...props}>
      {children}
    </View>
  );
};

export default CustomView;
