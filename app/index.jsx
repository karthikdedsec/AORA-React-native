import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function App() {
  return (
    <View className="flex flex-1 justify-center items-center">
      <Text className="text-4xl font-black">Aora!</Text>
      <StatusBar style="auto" />
      <Link href={"/home"} style={{ color: "blue" }}>
        Go to Home
      </Link>
    </View>
  );
}
