import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { icons } from "../constants";
const FormField = ({
  text,
  value,
  placeHolder,
  handleTextChange,
  otherStyles,
  ...props
}) => {
  const [showField, setShowField] = useState(false);
  return (
    <View className={`space-y-4 ${otherStyles}`}>
      <Text className="text-gray-100 font-pmedium">{text}</Text>
      <View className="w-full h-16 border-black-200 bg-black-100 px-4 flex flex-row items-center border-2 focus:border-secondary-200 rounded-2xl relative">
        <TextInput
          className="text-white w-full font-psemibold text-base"
          value={value}
          onChangeText={handleTextChange}
          placeholder={placeHolder}
          placeholderTextColor="#7b7b8b"
          secureTextEntry={text === "password" && !showField}
        />
        {text === "password" && (
          <TouchableOpacity
            className="absolute right-3"
            onPress={() => setShowField(!showField)}
          >
            <Image
              className="w-6 h-6"
              resizeMode="contain"
              source={!showField ? icons.eyeHide : icons.eye}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
export default FormField;
