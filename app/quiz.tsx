import AppButton from "@/components/AppButton";
import GradientBackground from "@/components/GradientBackground";
import { Colors } from "@/constants/Colors";
import { questions as localQuestions } from "@/constants/Subjects";
import {
  FirestoreQuestion,
  getQuestionsByTopic,
} from "@/services/questionService";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Pressable,
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

export default function QuizScreen() {
  const { subjectId, subjectTitle, topicId, topicTitle } =
    useLocalSearchParams<{
      subjectId?: string;
      subjectTitle?: string;
      topicId?: string;
      topicTitle?: string;
    }>();

  const [quizQuestions, setQuizQuestions] = useState<FirestoreQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [reviewAnswers, setReviewAnswers] = useState<ReviewAnswer[]>([]);
  const [loading, setLoading] = useState(true);
  const [timeLeft, setTimeLeft] = useState(30);
  const [answered, setAnswered] = useState(false);

  const currentQuestion = quizQuestions[currentIndex];
  const progress =
    quizQuestions.length > 0
      ? Math.round(((currentIndex + 1) / quizQuestions.length) * 100)
      : 0;

  useEffect(() => {
    loadQuizQuestions();
  }, [subjectId, topicId]);

  useEffect(() => {
    if (loading || answered || quizQuestions.length === 0) return;

    if (timeLeft === 0) {
      handleTimeUp();
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft((previousTime) => previousTime - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, loading, answered, quizQuestions.length]);

  async function loadQuizQuestions() {
    try {
      setLoading(true);

      const firestoreQuestions = await getQuestionsByTopic(
        subjectId || "",
        topicId || ""
      );

      let availableQuestions = firestoreQuestions;

      if (availableQuestions.length === 0) {
        availableQuestions = localQuestions.filter(
          (item: any) => item.subject === subjectId && item.topic === topicId
        ) as FirestoreQuestion[];
      }

      const randomizedQuestions = shuffleArray(availableQuestions).slice(0, 10);

      setQuizQuestions(randomizedQuestions);
      setCurrentIndex(0);
      setSelectedAnswer("");
      setScore(0);
      setReviewAnswers([]);
      setTimeLeft(30);
      setAnswered(false);
    } catch (error: any) {
      Alert.alert("Unable to Load Quiz", error.message);
    } finally {
      setLoading(false);
    }
  }

  function shuffleArray<T>(array: T[]) {
    return [...array].sort(() => Math.random() - 0.5);
  }

  function handleTimeUp() {
    if (!currentQuestion || answered) return;

    setAnswered(true);

    const updatedReviewAnswers = [
      ...reviewAnswers,
      {
        question: currentQuestion.question,
        selectedAnswer: "No answer selected",
        correctAnswer: currentQuestion.correctAnswer,
        isCorrect: false,
        explanation: currentQuestion.explanation,
      },
    ];

    setReviewAnswers(updatedReviewAnswers);

    setTimeout(() => {
      goToNextQuestion(score, updatedReviewAnswers);
    }, 700);
  }

  function handleSelectAnswer(answer: string) {
    if (!currentQuestion || answered) return;

    setSelectedAnswer(answer);
    setAnswered(true);

    const isCorrect = answer === currentQuestion.correctAnswer;
    const updatedScore = isCorrect ? score + 1 : score;

    const updatedReviewAnswers = [
      ...reviewAnswers,
      {
        question: currentQuestion.question,
        selectedAnswer: answer,
        correctAnswer: currentQuestion.correctAnswer,
        isCorrect,
        explanation: currentQuestion.explanation,
      },
    ];

    setScore(updatedScore);
    setReviewAnswers(updatedReviewAnswers);

    setTimeout(() => {
      goToNextQuestion(updatedScore, updatedReviewAnswers);
    }, 900);
  }

  function goToNextQuestion(
    updatedScore: number,
    updatedReviewAnswers: ReviewAnswer[]
  ) {
    if (currentIndex + 1 < quizQuestions.length) {
      setCurrentIndex((previousIndex) => previousIndex + 1);
      setSelectedAnswer("");
      setAnswered(false);
      setTimeLeft(30);
      return;
    }

    router.replace({
      pathname: "/result",
      params: {
        subjectId: subjectId || "",
        subjectTitle: subjectTitle || "Quiz",
        topicId: topicId || "",
        topicTitle: topicTitle || "",
        score: String(updatedScore),
        total: String(quizQuestions.length),
        review: JSON.stringify(updatedReviewAnswers),
      },
    } as any);
  }

  function getChoiceStyle(choice: string) {
    if (!answered) return styles.choiceCard;

    if (choice === currentQuestion?.correctAnswer) {
      return [styles.choiceCard, styles.correctChoice];
    }

    if (choice === selectedAnswer && choice !== currentQuestion?.correctAnswer) {
      return [styles.choiceCard, styles.wrongChoice];
    }

    return [styles.choiceCard, styles.disabledChoice];
  }

  function getChoiceTextStyle(choice: string) {
    if (!answered) return styles.choiceText;

    if (choice === currentQuestion?.correctAnswer) {
      return [styles.choiceText, styles.correctChoiceText];
    }

    if (choice === selectedAnswer && choice !== currentQuestion?.correctAnswer) {
      return [styles.choiceText, styles.wrongChoiceText];
    }

    return styles.choiceText;
  }

  if (loading) {
    return (
      <GradientBackground>
        <View style={styles.centerContainer}>
          <ActivityIndicator size="large" color={Colors.white} />
          <Text style={styles.loadingText}>Preparing your quiz...</Text>
        </View>
      </GradientBackground>
    );
  }

  if (quizQuestions.length === 0) {
    return (
      <GradientBackground>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.content}
        >
          <View style={styles.emptyCard}>
            <Text style={styles.emptyIcon}>📚</Text>
            <Text style={styles.emptyTitle}>No questions available</Text>
            <Text style={styles.emptyText}>
              This topic does not have questions yet. Please choose another topic
              or add questions to your question bank.
            </Text>

            <AppButton
              title="Go Back to Topics"
              onPress={() => router.back()}
              style={styles.emptyButton}
            />
          </View>
        </ScrollView>
      </GradientBackground>
    );
  }

  return (
    <GradientBackground>
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        <View style={styles.headerCard}>
          <Text style={styles.subjectText}>{subjectTitle || "Quiz"}</Text>
          <Text style={styles.topicText}>{topicTitle || "Selected Topic"}</Text>

          <View style={styles.progressRow}>
            <Text style={styles.progressText}>
              Question {currentIndex + 1} of {quizQuestions.length}
            </Text>
            <Text style={styles.progressText}>{progress}%</Text>
          </View>

          <View style={styles.progressTrack}>
            <View style={[styles.progressFill, { width: `${progress}%` }]} />
          </View>
        </View>

        <View style={styles.timerCard}>
          <Text style={styles.timerLabel}>Time Left</Text>
          <Text
            style={[
              styles.timerText,
              timeLeft <= 10 && styles.timerWarningText,
            ]}
          >
            {timeLeft}s
          </Text>
        </View>

        <View style={styles.questionCard}>
          <Text style={styles.questionText}>{currentQuestion.question}</Text>
        </View>

        <View style={styles.choicesSection}>
          {currentQuestion.choices.map((choice, index) => (
            <Pressable
              key={`${choice}-${index}`}
              style={({ pressed }) => [
                getChoiceStyle(choice),
                pressed && !answered && styles.choicePressed,
              ]}
              disabled={answered}
              onPress={() => handleSelectAnswer(choice)}
            >
              <View style={styles.choiceLetter}>
                <Text style={styles.choiceLetterText}>
                  {String.fromCharCode(65 + index)}
                </Text>
              </View>

              <Text style={getChoiceTextStyle(choice)}>{choice}</Text>
            </Pressable>
          ))}
        </View>

        <View style={styles.scoreCard}>
          <Text style={styles.scoreLabel}>Current Score</Text>
          <Text style={styles.scoreText}>
            {score} / {quizQuestions.length}
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
    paddingTop: 20,
    paddingBottom: 50,
  },
  centerContainer: {
    flex: 1,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  loadingText: {
    fontSize: 15,
    fontWeight: "800",
    color: Colors.white,
    marginTop: 14,
  },
  headerCard: {
    backgroundColor: "rgba(255, 255, 255, 0.92)",
    borderRadius: 24,
    padding: 20,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.65)",
    marginBottom: 14,
  },
  subjectText: {
    fontSize: 13,
    fontWeight: "900",
    color: Colors.primary,
    textTransform: "uppercase",
    marginBottom: 4,
  },
  topicText: {
    fontSize: 24,
    fontWeight: "900",
    color: Colors.darkPurple,
    marginBottom: 16,
  },
  progressRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  progressText: {
    fontSize: 13,
    fontWeight: "800",
    color: Colors.mutedText,
  },
  progressTrack: {
    height: 10,
    borderRadius: 99,
    backgroundColor: Colors.softBackground,
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    borderRadius: 99,
    backgroundColor: Colors.primary,
  },
  timerCard: {
    backgroundColor: "rgba(255, 255, 255, 0.92)",
    borderRadius: 20,
    padding: 16,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.65)",
    marginBottom: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  timerLabel: {
    fontSize: 14,
    fontWeight: "900",
    color: Colors.mutedText,
  },
  timerText: {
    fontSize: 22,
    fontWeight: "900",
    color: Colors.primary,
  },
  timerWarningText: {
    color: Colors.error,
  },
  questionCard: {
    backgroundColor: "rgba(59, 7, 100, 0.88)",
    borderRadius: 26,
    padding: 22,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.25)",
    marginBottom: 18,
  },
  questionText: {
    fontSize: 20,
    fontWeight: "900",
    color: Colors.white,
    lineHeight: 29,
    textAlign: "center",
  },
  choicesSection: {
    gap: 12,
  },
  choiceCard: {
    backgroundColor: "rgba(255, 255, 255, 0.92)",
    borderRadius: 20,
    padding: 16,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.65)",
    flexDirection: "row",
    alignItems: "center",
  },
  choicePressed: {
    opacity: 0.8,
    transform: [{ scale: 0.98 }],
  },
  choiceLetter: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: Colors.softBackground,
    borderWidth: 1,
    borderColor: Colors.border,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  choiceLetterText: {
    fontSize: 14,
    fontWeight: "900",
    color: Colors.primary,
  },
  choiceText: {
    flex: 1,
    fontSize: 15,
    fontWeight: "800",
    color: Colors.text,
    lineHeight: 21,
  },
  correctChoice: {
    backgroundColor: "#DCFCE7",
    borderColor: "#86EFAC",
  },
  wrongChoice: {
    backgroundColor: "#FEE2E2",
    borderColor: "#FCA5A5",
  },
  disabledChoice: {
    opacity: 0.65,
  },
  correctChoiceText: {
    color: Colors.success,
  },
  wrongChoiceText: {
    color: Colors.error,
  },
  scoreCard: {
    backgroundColor: "rgba(255, 255, 255, 0.92)",
    borderRadius: 20,
    padding: 16,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.65)",
    marginTop: 18,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  scoreLabel: {
    fontSize: 14,
    fontWeight: "900",
    color: Colors.mutedText,
  },
  scoreText: {
    fontSize: 20,
    fontWeight: "900",
    color: Colors.primary,
  },
  emptyCard: {
    backgroundColor: "rgba(255, 255, 255, 0.92)",
    borderRadius: 28,
    padding: 24,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.65)",
    alignItems: "center",
  },
  emptyIcon: {
    fontSize: 54,
    marginBottom: 12,
  },
  emptyTitle: {
    fontSize: 22,
    fontWeight: "900",
    color: Colors.darkPurple,
    textAlign: "center",
    marginBottom: 8,
  },
  emptyText: {
    fontSize: 14,
    fontWeight: "600",
    color: Colors.mutedText,
    textAlign: "center",
    lineHeight: 21,
  },
  emptyButton: {
    width: "100%",
    marginTop: 20,
  },
});