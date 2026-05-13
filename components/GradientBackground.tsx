import { LinearGradient } from "expo-linear-gradient";
import { ReactNode } from "react";
import { StyleSheet } from "react-native";

type GradientBackgroundProps = {
  children: ReactNode;
};

export default function GradientBackground({
  children,
}: GradientBackgroundProps) {
  return (
    <LinearGradient
      colors={["#3B0764", "#6D28D9", "#F5F3FF"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      {children}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});