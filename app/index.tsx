import "./globals.css"
import { Text, View } from "react-native";
 
export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl text-center font-bold text-orange-100 font-quicksand-light">
        Welcome to Nativewind!
      </Text>
    </View>
  );
}