import { Colors } from "@/constants/Colors";
import { StyleSheet, Text, View } from "react-native";

type EmptyStateProps = {
  title: string;
  message: string;
};

export default function EmptyState({ title, message }: EmptyStateProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.icon}>🧠</Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.softBackground,
    borderRadius: 22,
    padding: 24,
    alignItems: "center",
    borderWidth: 1,
    borderColor: Colors.border,
  },
  icon: {
    fontSize: 42,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "800",
    color: Colors.darkPurple,
    marginBottom: 6,
    textAlign: "center",
  },
  message: {
    fontSize: 14,
    color: Colors.mutedText,
    textAlign: "center",
    lineHeight: 20,
  },
});