import GradientBackground from "@/components/GradientBackground";
import ScreenHeader from "@/components/ScreenHeader";
import SubjectCard from "@/components/SubjectCard";
import { Colors } from "@/constants/Colors";
import { subjects } from "@/constants/Subjects";
import { router } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function SubjectsScreen() {
  return (
    <GradientBackground>
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        <ScreenHeader
          title="Choose your learning battlefield"
          subtitle="Pick a subject you want to challenge today. Take your time, trust yourself, and enjoy the quiz."
        />

        <View style={styles.noteCard}>
          <Text style={styles.noteIcon}>✨</Text>
          <Text style={styles.noteText}>
            You do not have to be perfect. Just begin, answer honestly, and let
            every topic teach you something new.
          </Text>
        </View>

        {subjects.map((subject) => (
          <SubjectCard
            key={subject.id}
            subject={subject}
            onPress={() =>
              router.push({
                pathname: "/topics",
                params: {
                  subjectId: subject.id,
                  subjectTitle: subject.title,
                },
              } as any)
            }
          />
        ))}
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
    paddingTop: 55,
    paddingBottom: 5,
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
});