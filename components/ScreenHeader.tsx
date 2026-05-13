import { Colors } from "@/constants/Colors";
import { StyleSheet, Text, View } from "react-native";

type ScreenHeaderProps = {
  title: string;
  subtitle?: string;
};

export default function ScreenHeader({ title, subtitle }: ScreenHeaderProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },
  title: {
    fontSize: 30,
    fontWeight: "900",
    color: Colors.white,
    lineHeight: 36,
  },
  subtitle: {
    fontSize: 15,
    fontWeight: "600",
    color: "#E9D5FF",
    lineHeight: 22,
    marginTop: 8,
  },
});
