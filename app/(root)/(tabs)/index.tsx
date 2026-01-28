import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-red-500 mb-4">Welcome to Nativewind!</Text>

      <Link href="/sign-in">signin</Link>
      <Link href="/explore">explore</Link>
      <Link href="/profile">profile</Link>
      <Link href="/properties/1">property</Link>
    </View>
  );
}
