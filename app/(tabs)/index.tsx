import AppButton from "@/components/AppButton";
import GradientBackground from "@/components/GradientBackground";
import ScreenHeader from "@/components/ScreenHeader";
import { Colors } from "@/constants/Colors";
import { getUnreadNotificationCount } from "@/services/notificationService";
import { router, useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function HomeScreen() {
  const [unreadCount, setUnreadCount] = useState(0);

  useFocusEffect(
    useCallback(() => {
      loadUnreadCount();
    }, [])
  );

  async function loadUnreadCount() {
    try {
      const count = await getUnreadNotificationCount();
      setUnreadCount(count);
    } catch {
      setUnreadCount(0);
    }
  }

  function handleNotificationPress() {
    router.push("/notifications" as any);
  }

  return (
    <GradientBackground>
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        <View style={styles.headerWrapper}>
          <View style={styles.headerTextBox}>
            <ScreenHeader
              title="Every question is a chance to grow."
              subtitle="Battle of Minds helps you test what you know, learn from your mistakes, and keep improving one quiz at a time."
            />
          </View>

          <Pressable
            style={({ pressed }) => [
              styles.notificationButton,
              pressed && styles.notificationPressed,
            ]}
            onPress={handleNotificationPress}
          >
            <Text style={styles.notificationIcon}>🔔</Text>

            {unreadCount > 0 ? (
              <View style={styles.notificationDot}>
                <Text style={styles.notificationDotText}>
                  {unreadCount > 9 ? "9+" : unreadCount}
                </Text>
              </View>
            ) : null}
          </Pressable>
        </View>

        <View style={styles.heroCard}>
          <Text style={styles.heroIcon}>🧠</Text>
          <Text style={styles.heroTitle}>Battle of Minds</Text>
          <Text style={styles.heroText}>
            This is not just about getting the highest score. It is about becoming
            more confident with every answer you try.
          </Text>

          <AppButton
            title="Start My Quiz Battle"
            onPress={() => router.push("/(tabs)/subjects")}
            style={styles.button}
          />
        </View>

        <View style={styles.infoGrid}>
          <View style={styles.infoCard}>
            <Text style={styles.infoNumber}>4</Text>
            <Text style={styles.infoLabel}>Learning Areas</Text>
          </View>

          <View style={styles.infoCard}>
            <Text style={styles.infoNumber}>∞</Text>
            <Text style={styles.infoLabel}>Chances to Improve</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Your learning journey starts here
          </Text>

          <View style={styles.stepCard}>
            <Text style={styles.stepNumber}>1</Text>
            <Text style={styles.stepText}>
              Choose a subject you want to challenge.
            </Text>
          </View>

          <View style={styles.stepCard}>
            <Text style={styles.stepNumber}>2</Text>
            <Text style={styles.stepText}>
              Answer each question with focus and confidence.
            </Text>
          </View>

          <View style={styles.stepCard}>
            <Text style={styles.stepNumber}>3</Text>
            <Text style={styles.stepText}>
              Review your answers and learn from every mistake.
            </Text>
          </View>
        </View>

        <View style={styles.quoteCard}>
          <Text style={styles.quoteText}>
            “A sharp mind is not built in one day. It grows every time you choose
            to keep learning.”
          </Text>
        </View>
      </ScrollView>
    </GradientBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
  },
  content: {
    padding: 20,
    paddingTop: 60,
    paddingBottom: 22,
  },

  headerWrapper: {
    position: "relative",
    marginBottom: 6,
  },
  headerTextBox: {
    paddingRight: 58,
  },
  notificationButton: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: "rgba(255, 255, 255, 0.22)",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.45)",
    alignItems: "center",
    justifyContent: "center",
  },
  notificationPressed: {
    opacity: 0.7,
  },
  notificationIcon: {
    fontSize: 22,
  },
  notificationDot: {
    position: "absolute",
    top: 5,
    right: 5,
    minWidth: 18,
    height: 18,
    borderRadius: 99,
    backgroundColor: Colors.error,
    borderWidth: 1,
    borderColor: Colors.white,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 4,
  },
  notificationDotText: {
    fontSize: 10,
    fontWeight: "900",
    color: Colors.white,
  },

  heroCard: {
    backgroundColor: "rgba(255, 255, 255, 0.92)",
    borderRadius: 28,
    padding: 24,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.65)",
    alignItems: "center",
  },
  heroIcon: {
    fontSize: 58,
    marginBottom: 12,
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: "900",
    color: Colors.darkPurple,
    marginBottom: 8,
    textAlign: "center",
  },
  heroText: {
    fontSize: 15,
    color: Colors.mutedText,
    textAlign: "center",
    lineHeight: 22,
  },
  button: {
    marginTop: 22,
    width: "100%",
  },
  infoGrid: {
    flexDirection: "row",
    gap: 12,
    marginTop: 18,
  },
  infoCard: {
    flex: 1,
    backgroundColor: "rgba(255, 255, 255, 0.92)",
    borderRadius: 22,
    padding: 18,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.65)",
    alignItems: "center",
  },
  infoNumber: {
    fontSize: 28,
    fontWeight: "900",
    color: Colors.primary,
  },
  infoLabel: {
    fontSize: 13,
    color: Colors.mutedText,
    marginTop: 4,
    textAlign: "center",
    fontWeight: "700",
  },
  section: {
    marginTop: 26,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "900",
    color: Colors.white,
    marginBottom: 12,
  },
  stepCard: {
    backgroundColor: "rgba(255, 255, 255, 0.92)",
    borderRadius: 18,
    padding: 16,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.65)",
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  stepNumber: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: Colors.softBackground,
    textAlign: "center",
    textAlignVertical: "center",
    color: Colors.primary,
    fontWeight: "900",
    marginRight: 12,
  },
  stepText: {
    flex: 1,
    fontSize: 14,
    color: Colors.mutedText,
    lineHeight: 20,
    fontWeight: "700",
  },
  quoteCard: {
    backgroundColor: "rgba(59, 7, 100, 0.88)",
    borderRadius: 22,
    padding: 20,
    marginTop: 18,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.25)",
  },
  quoteText: {
    color: Colors.white,
    fontSize: 15,
    lineHeight: 22,
    fontWeight: "700",
    textAlign: "center",
  },
});
