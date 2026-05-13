import { auth, db } from "@/services/firebaseConfig";
import { updateProfile, User } from "firebase/auth";
import { doc, serverTimestamp, updateDoc } from "firebase/firestore";

export async function updateUserProfile(data: {
  user: User;
  fullName: string;
}) {
  const cleanedFullName = data.fullName.trim();

  if (!cleanedFullName) {
    throw new Error("Full name cannot be empty.");
  }

  await updateProfile(data.user, {
    displayName: cleanedFullName,
  });

  await updateDoc(doc(db, "users", data.user.uid), {
    fullName: cleanedFullName,
    updatedAt: serverTimestamp(),
  });

  await auth.currentUser?.reload();

  return {
    fullName: cleanedFullName,
  };
}