import { Colors } from "@/constants/Colors";
import { Subject } from "@/types";
import { Pressable, StyleSheet, Text, View } from "react-native";

type SubjectCardProps = {
  subject: Subject;
  onPress: () => void;
};

export default function SubjectCard({ subject, onPress }: SubjectCardProps) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.card,
        pressed && styles.cardPressed,
      ]}
      onPress={onPress}
    >
      <View style={styles.iconBox}>
        <Text style={styles.icon}>{subject.icon}</Text>
      </View>

      <View style={styles.textBox}>
        <Text style={styles.title}>{subject.title}</Text>
        <Text style={styles.description}>{subject.description}</Text>
      </View>

      <Text style={styles.arrow}>›</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "rgba(255, 255, 255, 0.92)",
    borderRadius: 24,
    padding: 18,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.65)",
    marginBottom: 14,
    flexDirection: "row",
    alignItems: "center",
  },
  cardPressed: {
    opacity: 0.8,
    transform: [{ scale: 0.98 }],
  },
  iconBox: {
    width: 54,
    height: 54,
    borderRadius: 18,
    backgroundColor: Colors.softBackground,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  icon: {
    fontSize: 28,
  },
  textBox: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "900",
    color: Colors.darkPurple,
    marginBottom: 4,
  },
  description: {
    fontSize: 13,
    fontWeight: "600",
    color: Colors.mutedText,
    lineHeight: 19,
  },
  arrow: {
    fontSize: 34,
    fontWeight: "700",
    color: Colors.primary,
    marginLeft: 10,
  },
});