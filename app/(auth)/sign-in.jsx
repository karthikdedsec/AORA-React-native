import { View, Text, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import FormField from "../../components/FormField";
import { useState } from "react";
import CustomButton from "../../components/CustomButton";
import { Link } from "expo-router";
const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, isLoading] = useState(false);

  const submitForm = () => {};
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full flex flex-col justify-center  px-3 min-h-[85vh]">
          <Image
            className="w-[130px] h-[84px]"
            resizeMode="contain"
            source={images.logo}
          />
          <Text className="text-white text-2xl font-pbold my-6">Sign In</Text>
          <FormField
            text="Email"
            value={form.email}
            handleTextChange={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />
          <FormField
            text="Password"
            value={form.password}
            handleTextChange={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
          />
          <Text className="text-white text-right mt-6 font-pextralight">
            Forgot password
          </Text>
          <CustomButton
            title={`login`}
            handlePress={submitForm}
            containerStyles={`w-full mt-6`}
            isLoading={loading}
          />

          <View className="justify-center pt-5 flex flex-row gap-2">
            <Text className="text-white font-pregular">
              Dont't Have an Account?
            </Text>
            <Link href={"/sign-up"} className="text-[#FF9001] font-pregular">
              Sign Up
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default SignIn;
