import { View, Text, ScrollView, Image, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import FormField from "../../components/FormField";
import { useState } from "react";
import CustomButton from "../../components/CustomButton";
import { Link, router } from "expo-router";
import { createUser } from "../../lib/appwrite";
const SignUp = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [loading, setIsLoading] = useState(false);

  const submitForm = async () => {
    if (!form.username || !form.email || !form.password) {
      Alert.alert("Error", "Please fill out all the fields");
      return;
    }
    setIsLoading(true);
    console.log(form);
    try {
      const results = await createUser(
        form.email,
        form.password,
        form.username
      );

      //set to global state

      router.replace("/home");
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full flex flex-col justify-center  px-3 min-h-[85vh]">
          <Image
            className="w-[130px] h-[84px]"
            resizeMode="contain"
            source={images.logo}
          />
          <Text className="text-white text-2xl font-pbold my-6">Sign Up</Text>
          <FormField
            text="username"
            value={form.username}
            handleTextChange={(e) => setForm({ ...form, username: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />
          <FormField
            text="email"
            value={form.email}
            handleTextChange={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />
          <FormField
            text="password"
            value={form.password}
            handleTextChange={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
          />

          <CustomButton
            title={`sign up`}
            handlePress={submitForm}
            containerStyles={`w-full mt-9`}
            isLoading={loading}
          />

          <View className="justify-center pt-5 flex flex-row gap-2">
            <Text className="text-white font-pregular">
              Already have an account?
            </Text>
            <Link href={"/sign-in"} className="text-[#FF9001] font-pregular">
              Sign in
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default SignUp;
