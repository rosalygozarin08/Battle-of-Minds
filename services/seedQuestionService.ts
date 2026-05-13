import { questionBank } from "@/data/questionBank";
import { auth, db } from "@/services/firebaseConfig";
import {
    addDoc,
    collection,
    getDocs,
    query,
    serverTimestamp,
    where,
} from "firebase/firestore";

export async function seedQuestionBank() {
  const currentUser = auth.currentUser;

  if (!currentUser) {
    throw new Error("Please login first before importing the question bank.");
  }

  let addedCount = 0;
  let skippedCount = 0;

  for (const item of questionBank) {
    const existingQuestionQuery = query(
      collection(db, "questions"),
      where("subject", "==", item.subject),
      where("topic", "==", item.topic),
      where("question", "==", item.question)
    );

    const existingSnapshot = await getDocs(existingQuestionQuery);

    if (!existingSnapshot.empty) {
      skippedCount++;
      continue;
    }

    await addDoc(collection(db, "questions"), {
      subject: item.subject,
      topic: item.topic,
      question: item.question,
      choices: item.choices,
      correctAnswer: item.correctAnswer,
      explanation: item.explanation,
      createdBy: currentUser.uid,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });

    addedCount++;
  }

  return {
    addedCount,
    skippedCount,
    totalCount: questionBank.length,
  };
}