import React from "react";
import { TextInput } from "react-native";

const MainInput = ({value, onChange, onPress, placeholder}: {value?: string, placeholder?: string, onChange?: React.Dispatch<React.SetStateAction<string>>, onPress?: ()=> void}) => {
  return (
    <TextInput
    value={value}
    onChangeText={onChange}
    onPress={onPress}
      style={{
        width: "100%",
        height: 56,
        borderRadius: 10,
        paddingHorizontal: 24,
        fontSize: 18,
        backgroundColor: "#E5E5E5",
      }}
      placeholder={placeholder}
    />
  );
};

export default MainInput;
