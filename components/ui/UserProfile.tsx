import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import profileImage from "@/assets/images/profile.png";

interface IUserProfileProps {
  source: any;
  width: number;
  height: number;
  containerWidth:number;
  containerHeight:number;
}

const UserProfile: React.FC<IUserProfileProps> = ({
  source,
  width,
  height,
  containerWidth,
  containerHeight
}) => {
  return (
    <View style={{
        width:containerWidth,
        height:containerHeight
    }} className="justify-center items-center rounded-full flex shadow-black shadow-lg">
      <Image
        style={{
          width: width,
          height: height,
          borderRadius: 100,
        }}
        contentFit="cover"
        className="rounded-full"
        source={profileImage}
      />
    </View>
  );
};


export default UserProfile;