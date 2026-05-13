import AppButton from "@/components/AppButton";
import GradientBackground from "@/components/GradientBackground";
import ScreenHeader from "@/components/ScreenHeader";
import { Colors } from "@/constants/Colors";
import { logoutUser } from "@/services/authService";
import { auth } from "@/services/firebaseConfig";
import { getUserScores, SavedScore } from "@/services/scoreService";
import { router, useFocusEffect } from "expo-router";
import { onAuthStateChanged, User } from "firebase/auth";
import { useCallback, useEffect, useState } from "react";
import {
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function ProfileScreen() {
  const [user, setUser] = useState<User | null>(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [scoresLoading, setScoresLoading] = useState(false);
  const [logoutLoading, setLogoutLoading] = useState(false);
  const [scores, setScores] = useState<SavedScore[]>([]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setAuthLoading(false);
    });

    return unsubscribe;
  }, []);

  async function loadScores(currentUser: User | null) {
    if (!currentUser) {
      setScores([]);
      return;
    }

    try {
      setScoresLoading(true);
      const result = await getUserScores(currentUser.uid);
      setScores(result);
    } catch (error: any) {
      Alert.alert("Unable to Load Scores", error.message);
    } finally {
      setScoresLoading(false);
    }
  }

  useFocusEffect(
    useCallback(() => {
      loadScores(user);
    }, [user])
  );

  async function handleLogout() {
    try {
      setLogoutLoading(true);
      await logoutUser();

      setScores([]);

      Alert.alert("Logged Out", "You have been logged out successfully.");
      router.replace("/(tabs)");
    } catch (error: any) {
      Alert.alert("Logout Failed", error.message);
    } finally {
      setLogoutLoading(false);
    }
  }

  function formatDate(dateValue: any) {
    if (!dateValue) return "No date available";

    try {
      const date =
        typeof dateValue.toDate === "function"
          ? dateValue.toDate()
          : new Date(dateValue);

      return date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });
    } catch {
      return "No date available";
    }
  }

  const totalQuizzes = scores.length;

  const bestScore =
    scores.length > 0 ? Math.max(...scores.map((item) => item.percentage)) : 0;

  const latestScore = scores.length > 0 ? scores[0] : null;

  if (authLoading) {
    return (
      <GradientBackground>
        <View style={styles.centerContainer}>
          <Text style={styles.loadingText}>Loading profile...</Text>
        </View>
      </GradientBackground>
    );
  }

  if (!user) {
    return (
      <GradientBackground>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.content}
        >
          <ScreenHeader
            title="Your Profile"
            subtitle="Login to save your scores and track your quiz progress."
          />

          <View style={styles.card}>
            <Text style={styles.icon}>👤</Text>
            <Text style={styles.title}>Guest User</Text>
            <Text style={styles.text}>
              You are currently using Battle of Minds as a guest. You can still
              take quizzes, but your score history will not be saved yet.
            </Text>

            <AppButton
              title="Login"
              onPress={() => router.push("/login")}
              style={styles.button}
            />

            <AppButton
              title="Create Account"
              variant="outline"
              onPress={() => router.push("/register")}
              style={styles.outlineButton}
            />
          </View>
        </ScrollView>
      </GradientBackground>
    );
  }

  return (
    <GradientBackground>
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        <ScreenHeader
          title="Your Learning Journey"
          subtitle="See your progress, review your scores, and continue building your knowledge."
        />

        <View style={styles.profileCard}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>
              {user.displayName ? user.displayName.charAt(0).toUpperCase() : "U"}
            </Text>
          </View>

          <Text style={styles.name}>{user.displayName || "Battle Player"}</Text>
          <Text style={styles.email}>{user.email}</Text>

          <View style={styles.divider} />

          <View style={styles.statRow}>
            <View style={styles.statBox}>
              <Text style={styles.statNumber}>{totalQuizzes}</Text>
              <Text style={styles.statLabel}>Quizzes</Text>
            </View>

            <View style={styles.statBox}>
              <Text style={styles.statNumber}>{bestScore}%</Text>
              <Text style={styles.statLabel}>Best Score</Text>
            </View>
          </View>

          <Text style={styles.note}>
            {scoresLoading
              ? "Loading your quiz history..."
              : totalQuizzes > 0
                ? "Your latest saved quiz result is shown below."
                : "No saved quiz results yet. Take a quiz to start building your history."}
          </Text>

          <AppButton
            title="Edit Profile"
            onPress={() => router.push("/edit-profile" as any)}
            style={styles.editProfileButton}
          />

          <AppButton
            title="Logout"
            variant="outline"
            onPress={handleLogout}
            loading={logoutLoading}
            style={styles.logoutButton}
          />
        </View>

        <View style={styles.historySection}>
          <View style={styles.historyHeader}>
            <View style={styles.historyTitleBox}>
              <Text style={styles.historyTitle}>Score History Details</Text>
              <Text style={styles.historySubtitle}>Latest quiz result</Text>
            </View>

            {scores.length > 1 ? (
              <Pressable
                onPress={() => router.push("/score-history" as any)}
                style={({ pressed }) => [pressed && styles.seeAllPressed]}
              >
                <Text style={styles.seeAllText}>See All</Text>
              </Pressable>
            ) : null}
          </View>

          {!latestScore ? (
            <View style={styles.emptyHistory}>
              <Text style={styles.emptyIcon}>🧠</Text>
              <Text style={styles.emptyTitle}>No results yet</Text>
              <Text style={styles.emptyText}>
                Finish a quiz while logged in and your result will appear here.
              </Text>
            </View>
          ) : (
            <View style={styles.scoreCard}>
              <View style={styles.scoreHeader}>
                <Text style={styles.scoreSubject}>
                  {latestScore.subjectTitle}
                </Text>

                <View style={styles.percentBadge}>
                  <Text style={styles.percentText}>
                    {latestScore.percentage}%
                  </Text>
                </View>
              </View>

              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Score</Text>
                <Text style={styles.detailValue}>
                  {latestScore.score} out of {latestScore.total}
                </Text>
              </View>

              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Percentage</Text>
                <Text style={styles.detailValue}>
                  {latestScore.percentage}%
                </Text>
              </View>

              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Date Taken</Text>
                <Text style={styles.detailValue}>
                  {formatDate(latestScore.createdAt)}
                </Text>
              </View>
            </View>
          )}
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
    paddingTop: 40,
    paddingBottom: 5,
  },
  centerContainer: {
    flex: 1,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  loadingText: {
    fontSize: 16,
    fontWeight: "800",
    color: Colors.white,
  },
  card: {
    backgroundColor: "rgba(255, 255, 255, 0.92)",
    borderRadius: 24,
    padding: 24,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.65)",
    alignItems: "center",
  },
  icon: {
    fontSize: 54,
    marginBottom: 12,
  },
  title: {
    fontSize: 22,
    fontWeight: "900",
    color: Colors.darkPurple,
    marginBottom: 8,
  },
  text: {
    fontSize: 15,
    color: Colors.mutedText,
    textAlign: "center",
    lineHeight: 22,
  },
  button: {
    width: "100%",
    marginTop: 20,
  },
  outlineButton: {
    width: "100%",
    marginTop: 12,
  },
  profileCard: {
    backgroundColor: "rgba(255, 255, 255, 0.92)",
    borderRadius: 28,
    padding: 24,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.65)",
    alignItems: "center",
  },
  avatar: {
    width: 88,
    height: 88,
    borderRadius: 44,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 14,
  },
  avatarText: {
    fontSize: 36,
    fontWeight: "900",
    color: Colors.white,
  },
  name: {
    fontSize: 24,
    fontWeight: "900",
    color: Colors.darkPurple,
    textAlign: "center",
  },
  email: {
    fontSize: 14,
    color: Colors.mutedText,
    marginTop: 4,
    textAlign: "center",
  },
  divider: {
    width: "100%",
    height: 1,
    backgroundColor: Colors.border,
    marginVertical: 22,
  },
  statRow: {
    flexDirection: "row",
    gap: 12,
    width: "100%",
  },
  statBox: {
    flex: 1,
    backgroundColor: Colors.white,
    borderRadius: 18,
    padding: 16,
    alignItems: "center",
    borderWidth: 1,
    borderColor: Colors.border,
  },
  statNumber: {
    fontSize: 26,
    fontWeight: "900",
    color: Colors.primary,
  },
  statLabel: {
    fontSize: 13,
    color: Colors.mutedText,
    marginTop: 4,
  },
  note: {
    marginTop: 18,
    fontSize: 14,
    color: Colors.mutedText,
    textAlign: "center",
    lineHeight: 20,
  },
  editProfileButton: {
    width: "100%",
    marginTop: 20,
  },
  logoutButton: {
    width: "100%",
    marginTop: 12,
  },
  historySection: {
    marginTop: 26,
  },
  historyHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
    gap: 12,
  },
  historyTitleBox: {
    flex: 1,
  },
  historyTitle: {
    fontSize: 21,
    fontWeight: "900",
    color: Colors.white,
  },
  historySubtitle: {
    fontSize: 13,
    fontWeight: "700",
    color: "rgba(255, 255, 255, 0.82)",
    marginTop: 3,
  },
  seeAllText: {
    fontSize: 14,
    fontWeight: "900",
    color: Colors.white,
  },
  seeAllPressed: {
    opacity: 0.6,
  },
  emptyHistory: {
    backgroundColor: "rgba(255, 255, 255, 0.92)",
    borderRadius: 22,
    padding: 22,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.65)",
    alignItems: "center",
  },
  emptyIcon: {
    fontSize: 42,
    marginBottom: 8,
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: "900",
    color: Colors.darkPurple,
    marginBottom: 6,
  },
  emptyText: {
    fontSize: 14,
    color: Colors.mutedText,
    textAlign: "center",
    lineHeight: 20,
  },
  scoreCard: {
    backgroundColor: "rgba(255, 255, 255, 0.92)",
    borderRadius: 22,
    padding: 18,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.65)",
    marginBottom: 14,
  },
  scoreHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 14,
  },
  scoreSubject: {
    fontSize: 18,
    fontWeight: "900",
    color: Colors.darkPurple,
    flex: 1,
    marginRight: 10,
  },
  percentBadge: {
    backgroundColor: Colors.softBackground,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 99,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  percentText: {
    fontSize: 15,
    fontWeight: "900",
    color: Colors.primary,
  },
  detailRow: {
    backgroundColor: Colors.softBackground,
    borderRadius: 14,
    padding: 12,
    borderWidth: 1,
    borderColor: Colors.border,
    marginBottom: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  detailLabel: {
    fontSize: 13,
    fontWeight: "800",
    color: Colors.mutedText,
  },
  detailValue: {
    fontSize: 14,
    fontWeight: "900",
    color: Colors.text,
    textAlign: "right",
  },
});