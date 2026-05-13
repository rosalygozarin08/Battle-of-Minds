import EmptyState from "@/components/EmptyState";
import GradientBackground from "@/components/GradientBackground";
import ScreenHeader from "@/components/ScreenHeader";
import { Colors } from "@/constants/Colors";
import { auth } from "@/services/firebaseConfig";
import {
  deleteScore,
  getUserScores,
  SavedScore,
} from "@/services/scoreService";
import { useFocusEffect } from "expo-router";
import { onAuthStateChanged, User } from "firebase/auth";
import { useCallback, useEffect, useState } from "react";
import {
  Alert,
  Pressable,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function ScoreHistoryScreen() {
  const [user, setUser] = useState<User | null>(null);
  const [scores, setScores] = useState<SavedScore[]>([]);
  const [loading, setLoading] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return unsubscribe;
  }, []);

  useFocusEffect(
    useCallback(() => {
      loadScores();
    }, [user])
  );

  async function loadScores() {
    if (!user) {
      setScores([]);
      return;
    }

    try {
      setLoading(true);
      const result = await getUserScores(user.uid);
      setScores(result);
    } catch (error: any) {
      Alert.alert("Unable to Load Scores", error.message);
    } finally {
      setLoading(false);
    }
  }

  async function handleDeleteScore(score: SavedScore) {
    Alert.alert(
      "Delete Score",
      "Are you sure you want to delete this score history? This action cannot be undone.",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Delete",
          style: "destructive",
          onPress: async () => {
            try {
              setDeletingId(score.id);

              await deleteScore(score.id);

              setScores((previousScores) =>
                previousScores.filter((item) => item.id !== score.id)
              );

              Alert.alert("Deleted", "The score history has been deleted.");
            } catch (error: any) {
              Alert.alert("Delete Failed", error.message);
            } finally {
              setDeletingId(null);
            }
          },
        },
      ]
    );
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

  function getBadgeText(percentage: number) {
    if (percentage >= 90) return "Excellent";
    if (percentage >= 75) return "Great Job";
    if (percentage >= 50) return "Keep Improving";
    return "Needs Review";
  }

  if (!user) {
    return (
      <GradientBackground>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.content}
        >
          <ScreenHeader
            title="Score History"
            subtitle="Login first to view your saved quiz results."
          />

          <EmptyState
            title="No account found"
            message="You need to login before viewing your score history."
          />
        </ScrollView>
      </GradientBackground>
    );
  }

  return (
    <GradientBackground>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={loadScores} />
        }
      >
        <ScreenHeader
          title="Score History"
          subtitle="Review your previous quiz results and delete records you no longer need."
        />

        <View style={styles.summaryCard}>
          <Text style={styles.summaryLabel}>Total Saved Results</Text>
          <Text style={styles.summaryNumber}>{scores.length}</Text>
          <Text style={styles.summaryText}>
            These are your saved quiz records from your completed attempts.
          </Text>
        </View>

        {loading ? (
          <Text style={styles.loadingText}>Loading score history...</Text>
        ) : scores.length === 0 ? (
          <EmptyState
            title="No score history yet"
            message="Finish a quiz while logged in and your saved results will appear here."
          />
        ) : (
          scores.map((item) => (
            <View key={item.id} style={styles.scoreCard}>
              <View style={styles.scoreHeader}>
                <View style={styles.titleBox}>
                  <Text style={styles.subjectTitle}>{item.subjectTitle}</Text>
                  <Text style={styles.dateText}>
                    {formatDate(item.createdAt)}
                  </Text>
                </View>

                <View style={styles.percentBadge}>
                  <Text style={styles.percentText}>{item.percentage}%</Text>
                </View>
              </View>

              <View style={styles.badgeBox}>
                <Text style={styles.badgeText}>
                  {getBadgeText(item.percentage)}
                </Text>
              </View>

              <View style={styles.detailBox}>
                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>Score</Text>
                  <Text style={styles.detailValue}>
                    {item.score} out of {item.total}
                  </Text>
                </View>

                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>Percentage</Text>
                  <Text style={styles.detailValue}>{item.percentage}%</Text>
                </View>

                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>Date Taken</Text>
                  <Text style={styles.detailValue}>
                    {formatDate(item.createdAt)}
                  </Text>
                </View>
              </View>

              <Pressable
                style={({ pressed }) => [
                  styles.deleteButton,
                  pressed && styles.pressedButton,
                  deletingId === item.id && styles.disabledButton,
                ]}
                disabled={deletingId === item.id}
                onPress={() => handleDeleteScore(item)}
              >
                <Text style={styles.deleteButtonText}>
                  {deletingId === item.id ? "Deleting..." : "Delete Score"}
                </Text>
              </Pressable>
            </View>
          ))
        )}
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
    paddingTop: 18,
    paddingBottom: 40,
  },
  summaryCard: {
    backgroundColor: "rgba(255, 255, 255, 0.92)",
    borderRadius: 24,
    padding: 22,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.65)",
    marginBottom: 22,
  },
  summaryLabel: {
    fontSize: 13,
    fontWeight: "900",
    color: Colors.mutedText,
    textTransform: "uppercase",
    marginBottom: 6,
  },
  summaryNumber: {
    fontSize: 42,
    fontWeight: "900",
    color: Colors.primary,
  },
  summaryText: {
    fontSize: 14,
    fontWeight: "600",
    color: Colors.mutedText,
    lineHeight: 21,
    marginTop: 4,
  },
  loadingText: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: "800",
    color: Colors.white,
    marginTop: 24,
  },
  scoreCard: {
    backgroundColor: "rgba(255, 255, 255, 0.92)",
    borderRadius: 24,
    padding: 18,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.65)",
    marginBottom: 16,
  },
  scoreHeader: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: 12,
    marginBottom: 12,
  },
  titleBox: {
    flex: 1,
  },
  subjectTitle: {
    fontSize: 19,
    fontWeight: "900",
    color: Colors.darkPurple,
    marginBottom: 4,
  },
  dateText: {
    fontSize: 13,
    fontWeight: "700",
    color: Colors.mutedText,
  },
  percentBadge: {
    backgroundColor: Colors.softBackground,
    borderRadius: 99,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  percentText: {
    fontSize: 15,
    fontWeight: "900",
    color: Colors.primary,
  },
  badgeBox: {
    alignSelf: "flex-start",
    backgroundColor: Colors.primary,
    borderRadius: 99,
    paddingHorizontal: 12,
    paddingVertical: 7,
    marginBottom: 12,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: "900",
    color: Colors.white,
  },
  detailBox: {
    gap: 8,
    marginBottom: 14,
  },
  detailRow: {
    backgroundColor: Colors.softBackground,
    borderRadius: 14,
    padding: 12,
    borderWidth: 1,
    borderColor: Colors.border,
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
  deleteButton: {
    backgroundColor: "#FEE2E2",
    borderRadius: 16,
    paddingVertical: 13,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#FCA5A5",
  },
  deleteButtonText: {
    fontSize: 14,
    fontWeight: "900",
    color: Colors.error,
  },
  pressedButton: {
    opacity: 0.7,
  },
  disabledButton: {
    opacity: 0.6,
  },
});