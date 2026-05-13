import GradientBackground from "@/components/GradientBackground";
import ScreenHeader from "@/components/ScreenHeader";
import { Colors } from "@/constants/Colors";
import { getTopicsBySubject } from "@/constants/Topics";
import { router, useLocalSearchParams } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

export default function TopicsScreen() {
  const { subjectId, subjectTitle } = useLocalSearchParams<{
    subjectId?: string;
    subjectTitle?: string;
  }>();

  const topics = getTopicsBySubject(subjectId || "");

  return (
    <GradientBackground>
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        <ScreenHeader
          title={`${subjectTitle || "Subject"} Topics`}
          subtitle="Choose one topic and answer the quiz questions with focus and confidence."
        />

        <View style={styles.noteCard}>
          <Text style={styles.noteIcon}>🎯</Text>
          <Text style={styles.noteText}>
            Each topic has 10 questions. Read carefully, trust what you know, and
            learn from every answer.
          </Text>
        </View>

        {topics.map((topic) => (
          <Pressable
            key={topic.id}
            style={({ pressed }) => [
              styles.topicCard,
              pressed && styles.topicCardPressed,
            ]}
            onPress={() =>
              router.push({
                pathname: "/quiz",
                params: {
                  subjectId: subjectId || "",
                  subjectTitle: subjectTitle || "",
                  topicId: topic.id,
                  topicTitle: topic.title,
                },
              } as any)
            }
          >
            <View style={styles.iconBox}>
              <Text style={styles.topicIcon}>{topic.icon}</Text>
            </View>

            <View style={styles.topicTextBox}>
              <Text style={styles.topicTitle}>{topic.title}</Text>
              <Text style={styles.topicDescription}>{topic.description}</Text>
            </View>

            <Text style={styles.arrow}>›</Text>
          </Pressable>
        ))}

        {topics.length === 0 ? (
          <View style={styles.emptyCard}>
            <Text style={styles.emptyIcon}>📚</Text>
            <Text style={styles.emptyTitle}>No topics found</Text>
            <Text style={styles.emptyText}>
              This subject has no topics available yet.
            </Text>
          </View>
        ) : null}
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
  noteCard: {
    backgroundColor: "rgba(255, 255, 255, 0.92)",
    borderRadius: 22,
    padding: 18,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.65)",
    marginBottom: 18,
    flexDirection: "row",
    alignItems: "flex-start",
  },
  noteIcon: {
    fontSize: 24,
    marginRight: 12,
  },
  noteText: {
    flex: 1,
    fontSize: 14,
    color: Colors.mutedText,
    lineHeight: 21,
    fontWeight: "700",
  },
  topicCard: {
    backgroundColor: "rgba(255, 255, 255, 0.92)",
    borderRadius: 24,
    padding: 18,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.65)",
    marginBottom: 14,
    flexDirection: "row",
    alignItems: "center",
  },
  topicCardPressed: {
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
  topicIcon: {
    fontSize: 28,
  },
  topicTextBox: {
    flex: 1,
  },
  topicTitle: {
    fontSize: 18,
    fontWeight: "900",
    color: Colors.darkPurple,
    marginBottom: 4,
  },
  topicDescription: {
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
  emptyCard: {
    backgroundColor: "rgba(255, 255, 255, 0.92)",
    borderRadius: 24,
    padding: 24,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.65)",
    alignItems: "center",
    marginTop: 10,
  },
  emptyIcon: {
    fontSize: 44,
    marginBottom: 10,
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: "900",
    color: Colors.darkPurple,
    marginBottom: 6,
  },
  emptyText: {
    fontSize: 14,
    fontWeight: "600",
    color: Colors.mutedText,
    textAlign: "center",
    lineHeight: 20,
  },
});