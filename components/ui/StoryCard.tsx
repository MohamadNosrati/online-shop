import { Image } from "expo-image";
import { View } from "react-native";
import storyImage from "@/assets/images/storyImage.png";

interface IStoryCardProps {
  width: number;
  height: number;
  source: any;
}

const StoryCard: React.FC<IStoryCardProps> = ({ width, height, source }) => {
  return (
    <View className="rounded-xl overflow-hidden">
      <Image
        style={{
          width: width,
          height: height,

        }}
        contentFit="cover"
        source={storyImage}
      />
    </View>
  );
};

export default StoryCard;
