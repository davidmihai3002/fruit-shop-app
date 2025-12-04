import { mainInputStyles } from "@/lib/styles/shared/MainInputStyles";
import { MainInputProps } from "@/lib/types/components/shared";
import React from "react";
import { TextInput } from "react-native";

const MainInput = ({
  value,
  onChange,
  onPress,
  placeholder,
}: MainInputProps) => {
  return (
    <TextInput
      value={value}
      onChangeText={onChange}
      onPress={onPress}
      style={mainInputStyles.input}
      placeholder={placeholder}
    />
  );
};

export default MainInput;
