import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, Text, View } from "react-native";
import { Redirect, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";
import CustomButton from "../components/CustomButton";

export default function App() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full h-full items-center justify-center min-h-[85vh] flex flex-col px-4">
          <Image
            className="w-[130px] h-[84px]"
            resizeMode="contain"
            source={images.logo}
          />
          <Image
            className="max-w-[380px] w-full h-[300px]"
            resizeMode="contain"
            source={images.cards}
          />
          <View className="relative">
            <Text className="text-white text-3xl text-center font-psemibold mt-4">
              Discover Endless Possibilities with{" "}
              <Text className="text-secondary-200">Aora</Text>
            </Text>
            <Image
              className="absolute w-[136px] h-[16px] -right-6 -bottom-1"
              resizeMode="contain"
              source={images.path}
            />
          </View>
          <Text className="font-pregular text-gray-100 text-center mt-4">
            Where Creativity Meets Innovation: Embark on a Journey of Limitless
            Exploration with Aora
          </Text>
          <CustomButton
            title={`Continue with Email`}
            handlePress={() => router.push("/sign-in")}
            containerStyles={`w-full mt-7`}
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
}
