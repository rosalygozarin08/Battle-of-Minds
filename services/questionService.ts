import { db } from "@/services/firebaseConfig";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
  where,
} from "firebase/firestore";

export type FirestoreQuestion = {
  id: string;
  subject: string;
  topic: string;
  question: string;
  choices: string[];
  correctAnswer: string;
  explanation: string;
  createdBy?: string;
  createdAt?: any;
  updatedAt?: any;
};

export type QuestionInput = {
  subject: string;
  topic: string;
  question: string;
  choices: string[];
  correctAnswer: string;
  explanation: string;
};

export async function getAllQuestions(): Promise<FirestoreQuestion[]> {
  const questionsQuery = query(
    collection(db, "questions"),
    orderBy("createdAt", "desc")
  );

  const snapshot = await getDocs(questionsQuery);

  return snapshot.docs.map((docItem) => ({
    id: docItem.id,
    ...docItem.data(),
  })) as FirestoreQuestion[];
}

export async function getQuestionsBySubject(
  subjectId: string
): Promise<FirestoreQuestion[]> {
  const questionsQuery = query(
    collection(db, "questions"),
    where("subject", "==", subjectId)
  );

  const snapshot = await getDocs(questionsQuery);

  return snapshot.docs.map((docItem) => ({
    id: docItem.id,
    ...docItem.data(),
  })) as FirestoreQuestion[];
}

export async function getQuestionsByTopic(
  subjectId: string,
  topicId: string
): Promise<FirestoreQuestion[]> {
  const questionsQuery = query(
    collection(db, "questions"),
    where("subject", "==", subjectId),
    where("topic", "==", topicId)
  );

  const snapshot = await getDocs(questionsQuery);

  return snapshot.docs.map((docItem) => ({
    id: docItem.id,
    ...docItem.data(),
  })) as FirestoreQuestion[];
}

export async function createQuestion(
  data: QuestionInput & {
    createdBy: string;
  }
) {
  await addDoc(collection(db, "questions"), {
    subject: data.subject,
    topic: data.topic,
    question: data.question,
    choices: data.choices,
    correctAnswer: data.correctAnswer,
    explanation: data.explanation,
    createdBy: data.createdBy,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });
}

export async function updateQuestion(
  questionId: string,
  data: QuestionInput
) {
  await updateDoc(doc(db, "questions", questionId), {
    subject: data.subject,
    topic: data.topic,
    question: data.question,
    choices: data.choices,
    correctAnswer: data.correctAnswer,
    explanation: data.explanation,
    updatedAt: serverTimestamp(),
  });
}

export async function deleteQuestion(questionId: string) {
  await deleteDoc(doc(db, "questions", questionId));
}