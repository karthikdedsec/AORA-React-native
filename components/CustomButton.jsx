import { TouchableOpacity, Text } from "react-native";
const CustomButton = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading,
}) => {
  return (
    <TouchableOpacity
      className={`bg-secondary-200 ${containerStyles} rounded-lg py-4 ${
        isLoading ? "opacity-50" : ""
      }`}
      onPress={handlePress}
      activeOpacity={0.7}
      disabled={isLoading}
    >
      <Text className={`text-primary font-psemibold text-center ${textStyles}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};
export default CustomButton;
