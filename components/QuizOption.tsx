import { Colors } from "@/constants/Colors";
import { Pressable, StyleSheet, Text } from "react-native";

type QuizOptionProps = {
  label: string;
  selected: boolean;
  onPress: () => void;
};

export default function QuizOption({
  label,
  selected,
  onPress,
}: QuizOptionProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.option,
        selected && styles.selectedOption,
        pressed && styles.pressed,
      ]}
    >
      <Text style={[styles.text, selected && styles.selectedText]}>
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  option: {
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
  },
  selectedOption: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
  },
  text: {
    fontSize: 15,
    fontWeight: "600",
    color: Colors.text,
  },
  selectedText: {
    color: Colors.white,
  },
  pressed: {
    opacity: 0.85,
  },
});