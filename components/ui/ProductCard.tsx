import { Image } from "expo-image";
import { Text, View } from "react-native";
import productImage from "@/assets/images/productImage.png";

const ProductCard = () => {
  return (
    <View
      style={{
        width: 130,
      }}
      className="gap-y-2"
    >
      <View className=" shadow-black shadow-2xl p-2 rounded-md bg-white">
        <Image
          source={productImage}
          style={{
            width: 150,
            height: 150,
          }}
        />
      </View>
      <View>
        <Text className="text-sm font-nunito">
          Lorem ipsum dolor sit amet consectetur.
        </Text>
      </View>
      <View>
        <Text className="text-lg font-bold font-raleway">$17,00</Text>
      </View>
    </View>
  );
};

export default ProductCard;
