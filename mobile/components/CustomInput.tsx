import { TextInput, StyleSheet, TextInputProps } from "react-native";

interface CustomInputProps extends TextInputProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
}

const CustomInput = ({
  placeholder,
  value,
  onChangeText,
  ...otherProps
}: CustomInputProps) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor="#9ca3af"
      value={value}
      onChangeText={onChangeText}
      {...otherProps} // Corrected spread operator
    />
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#1f2937",
    color: "#fff",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    fontSize: 16,
    marginBottom: 12,
  },
});

export default CustomInput;
