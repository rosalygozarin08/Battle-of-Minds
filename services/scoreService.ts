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
  where,
} from "firebase/firestore";

export type SavedScore = {
  id: string;
  userId: string;
  playerName?: string;
  subjectId: string;
  subjectTitle: string;
  score: number;
  total: number;
  percentage: number;
  createdAt?: any;
  updatedAt?: any;
};

export async function saveQuizResult(data: {
  userId: string;
  playerName?: string;
  subjectId: string;
  subjectTitle: string;
  score: number;
  total: number;
  percentage: number;
}) {
  await addDoc(collection(db, "scores"), {
    userId: data.userId,
    playerName: data.playerName || "Battle Player",
    subjectId: data.subjectId,
    subjectTitle: data.subjectTitle,
    score: data.score,
    total: data.total,
    percentage: data.percentage,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });
}

export async function getUserScores(userId: string): Promise<SavedScore[]> {
  const scoresQuery = query(
    collection(db, "scores"),
    where("userId", "==", userId),
    orderBy("createdAt", "desc")
  );

  const snapshot = await getDocs(scoresQuery);

  return snapshot.docs.map((docItem) => ({
    id: docItem.id,
    ...docItem.data(),
  })) as SavedScore[];
}

export async function deleteScore(scoreId: string) {
  await deleteDoc(doc(db, "scores", scoreId));
}