import AppButton from "@/components/AppButton";
import GradientBackground from "@/components/GradientBackground";
import ScreenHeader from "@/components/ScreenHeader";
import { Colors } from "@/constants/Colors";
import { auth } from "@/services/firebaseConfig";
import { addNotification } from "@/services/notificationService";
import { saveQuizResult } from "@/services/scoreService";
import { router, useLocalSearchParams } from "expo-router";
import { onAuthStateChanged, User } from "firebase/auth";
import { useEffect, useRef, useState } from "react";
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

type ReviewAnswer = {
  question: string;
  selectedAnswer: string;
  correctAnswer: string;
  isCorrect: boolean;
  explanation?: string;
};

export default function ResultScreen() {
  const { subjectId, subjectTitle, topicTitle, score, total, review } =
    useLocalSearchParams<{
      subjectId?: string;
      subjectTitle?: string;
      topicTitle?: string;
      score?: string;
      total?: string;
      review?: string;
    }>();

  const [user, setUser] = useState<User | null>(null);
  const [saveStatus, setSaveStatus] = useState("Checking account...");
  const hasSavedResult = useRef(false);

  const numericScore = Number(score || 0);
  const numericTotal = Number(total || 0);

  const percentage =
    numericTotal > 0 ? Math.round((numericScore / numericTotal) * 100) : 0;

  const reviewAnswers: ReviewAnswer[] = review ? JSON.parse(review) : [];

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    if (!user) {
      setSaveStatus("Login to save your quiz result.");
      return;
    }

    if (hasSavedResult.current) return;

    saveResultAndNotify(user);
  }, [user]);

  async function saveResultAndNotify(currentUser: User) {
    try {
      hasSavedResult.current = true;
      setSaveStatus("Saving your quiz result...");

      await saveQuizResult({
        userId: currentUser.uid,
        playerName: currentUser.displayName || "Battle Player",
        subjectId: subjectId || "",
        subjectTitle: subjectTitle || "Quiz",
        score: numericScore,
        total: numericTotal,
        percentage,
      });

      await addNotification({
        icon: "🏆",
        title: "Quiz Completed",
        message: `You completed ${subjectTitle || "a quiz"}${
          topicTitle ? ` - ${topicTitle}` : ""
        } with a score of ${numericScore} out of ${numericTotal}. Keep going and continue improving.`,
      });

      setSaveStatus("Your quiz result has been saved.");
    } catch (error: any) {
      hasSavedResult.current = false;
      setSaveStatus("Unable to save your quiz result.");
      Alert.alert("Save Failed", error.message);
    }
  }

  function getResultBadge() {
    if (percentage >= 90) return "Excellent Work";
    if (percentage >= 75) return "Great Job";
    if (percentage >= 50) return "Keep Improving";
    return "Review and Try Again";
  }

  function getResultMessage() {
    if (percentage >= 90) {
      return "You showed strong understanding of this topic. Keep your momentum and continue challenging yourself.";
    }

    if (percentage >= 75) {
      return "You did well. A little more review can help you become even more confident.";
    }

    if (percentage >= 50) {
      return "You are making progress. Review the explanations and try again to improve your score.";
    }

    return "Do not be discouraged. Every mistake is a chance to learn and become better.";
  }

  return (
    <GradientBackground>
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        <ScreenHeader
          title="Quiz Result"
          subtitle="Your result is not the end of learning. It is a guide for what to improve next."
        />

        <View style={styles.resultCard}>
          <Text style={styles.trophyIcon}>🏆</Text>

          <Text style={styles.badgeText}>{getResultBadge()}</Text>

          <Text style={styles.subjectText}>
            {subjectTitle || "Quiz"}
            {topicTitle ? ` • ${topicTitle}` : ""}
          </Text>

          <View style={styles.scoreCircle}>
            <Text style={styles.scoreText}>
              {numericScore}/{numericTotal}
            </Text>
            <Text style={styles.percentText}>{percentage}%</Text>
          </View>

          <Text style={styles.messageText}>{getResultMessage()}</Text>

          <View style={styles.saveBox}>
            <Text style={styles.saveLabel}>Save Status</Text>
            <Text style={styles.saveText}>{saveStatus}</Text>
          </View>

          <AppButton
            title="Try Another Quiz"
            onPress={() => router.replace("/(tabs)/subjects")}
            style={styles.primaryButton}
          />

          <AppButton
            title="Go to Home"
            variant="outline"
            onPress={() => router.replace("/(tabs)")}
            style={styles.secondaryButton}
          />
        </View>

        <View style={styles.reviewSection}>
          <Text style={styles.reviewTitle}>Look back and learn</Text>
          <Text style={styles.reviewSubtitle}>
            Review each item below to understand your answers better.
          </Text>

          {reviewAnswers.length === 0 ? (
            <View style={styles.emptyReviewCard}>
              <Text style={styles.emptyReviewIcon}>📚</Text>
              <Text style={styles.emptyReviewTitle}>No review available</Text>
              <Text style={styles.emptyReviewText}>
                There are no recorded answers for this quiz attempt.
              </Text>
            </View>
          ) : (
            reviewAnswers.map((item, index) => (
              <View key={`${item.question}-${index}`} style={styles.reviewCard}>
                <View style={styles.reviewHeader}>
                  <Text style={styles.questionNumber}>Question {index + 1}</Text>

                  <View
                    style={[
                      styles.statusBadge,
                      item.isCorrect
                        ? styles.correctBadge
                        : styles.incorrectBadge,
                    ]}
                  >
                    <Text
                      style={[
                        styles.statusText,
                        item.isCorrect
                          ? styles.correctText
                          : styles.incorrectText,
                      ]}
                    >
                      {item.isCorrect ? "Correct" : "Incorrect"}
                    </Text>
                  </View>
                </View>

                <Text style={styles.questionText}>{item.question}</Text>

                <View style={styles.answerBox}>
                  <Text style={styles.answerLabel}>What you chose</Text>
                  <Text
                    style={[
                      styles.answerText,
                      item.isCorrect
                        ? styles.correctAnswerText
                        : styles.wrongAnswerText,
                    ]}
                  >
                    {item.selectedAnswer || "No answer selected"}
                  </Text>
                </View>

                <View style={styles.answerBox}>
                  <Text style={styles.answerLabel}>Best answer</Text>
                  <Text style={styles.correctAnswerText}>
                    {item.correctAnswer}
                  </Text>
                </View>

                <View style={styles.explanationBox}>
                  <Text style={styles.answerLabel}>Explanation</Text>
                  <Text style={styles.explanationText}>
                    {item.explanation ||
                      "No explanation has been added for this question yet. You can still use the correct answer as a guide and review the topic again to understand it better."}
                  </Text>
                </View>
              </View>
            ))
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
    paddingTop: 20,
    paddingBottom: 40,
  },
  resultCard: {
    backgroundColor: "rgba(255, 255, 255, 0.92)",
    borderRadius: 30,
    padding: 24,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.65)",
    alignItems: "center",
  },
  trophyIcon: {
    fontSize: 64,
    marginBottom: 10,
  },
  badgeText: {
    fontSize: 25,
    fontWeight: "900",
    color: Colors.darkPurple,
    textAlign: "center",
  },
  subjectText: {
    fontSize: 14,
    fontWeight: "800",
    color: Colors.mutedText,
    textAlign: "center",
    marginTop: 6,
  },
  scoreCircle: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 22,
    marginBottom: 18,
  },
  scoreText: {
    fontSize: 34,
    fontWeight: "900",
    color: Colors.white,
  },
  percentText: {
    fontSize: 18,
    fontWeight: "800",
    color: Colors.white,
    marginTop: 4,
  },
  messageText: {
    fontSize: 15,
    fontWeight: "600",
    color: Colors.mutedText,
    textAlign: "center",
    lineHeight: 22,
  },
  saveBox: {
    width: "100%",
    backgroundColor: Colors.white,
    borderRadius: 18,
    padding: 15,
    borderWidth: 1,
    borderColor: Colors.border,
    marginTop: 18,
  },
  saveLabel: {
    fontSize: 12,
    fontWeight: "900",
    color: Colors.mutedText,
    textTransform: "uppercase",
    marginBottom: 4,
  },
  saveText: {
    fontSize: 14,
    fontWeight: "800",
    color: Colors.text,
  },
  primaryButton: {
    width: "100%",
    marginTop: 22,
  },
  secondaryButton: {
    width: "100%",
    marginTop: 12,
  },
  reviewSection: {
    marginTop: 28,
  },
  reviewTitle: {
    fontSize: 22,
    fontWeight: "900",
    color: Colors.white,
  },
  reviewSubtitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "rgba(255, 255, 255, 0.88)",
    lineHeight: 20,
    marginTop: 4,
    marginBottom: 16,
  },
  emptyReviewCard: {
    backgroundColor: "rgba(255, 255, 255, 0.92)",
    borderRadius: 22,
    padding: 22,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.65)",
    alignItems: "center",
  },
  emptyReviewIcon: {
    fontSize: 42,
    marginBottom: 8,
  },
  emptyReviewTitle: {
    fontSize: 18,
    fontWeight: "900",
    color: Colors.darkPurple,
    marginBottom: 6,
  },
  emptyReviewText: {
    fontSize: 14,
    fontWeight: "600",
    color: Colors.mutedText,
    textAlign: "center",
    lineHeight: 20,
  },
  reviewCard: {
    backgroundColor: "rgba(255, 255, 255, 0.92)",
    borderRadius: 22,
    padding: 18,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.65)",
    marginBottom: 14,
  },
  reviewHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
    gap: 10,
  },
  questionNumber: {
    fontSize: 13,
    fontWeight: "900",
    color: Colors.primary,
  },
  statusBadge: {
    borderRadius: 99,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  correctBadge: {
    backgroundColor: "#DCFCE7",
  },
  incorrectBadge: {
    backgroundColor: "#FEE2E2",
  },
  statusText: {
    fontSize: 12,
    fontWeight: "900",
  },
  correctText: {
    color: Colors.success,
  },
  incorrectText: {
    color: Colors.error,
  },
  questionText: {
    fontSize: 16,
    fontWeight: "900",
    color: Colors.text,
    lineHeight: 23,
    marginBottom: 12,
  },
  answerBox: {
    backgroundColor: Colors.softBackground,
    borderRadius: 14,
    padding: 12,
    borderWidth: 1,
    borderColor: Colors.border,
    marginBottom: 10,
  },
  explanationBox: {
    backgroundColor: Colors.softBackground,
    borderRadius: 14,
    padding: 12,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  answerLabel: {
    fontSize: 11,
    fontWeight: "900",
    color: Colors.mutedText,
    textTransform: "uppercase",
    marginBottom: 4,
  },
  answerText: {
    fontSize: 14,
    fontWeight: "900",
  },
  correctAnswerText: {
    fontSize: 14,
    fontWeight: "900",
    color: Colors.success,
  },
  wrongAnswerText: {
    fontSize: 14,
    fontWeight: "900",
    color: Colors.error,
  },
  explanationText: {
    fontSize: 13,
    fontWeight: "600",
    color: Colors.mutedText,
    lineHeight: 20,
  },
});