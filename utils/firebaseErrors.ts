export function getFirebaseErrorMessage(error: any): string {
  const code = error?.code;

  switch (code) {
    case "auth/invalid-email":
      return "Please enter a valid email address.";

    case "auth/user-not-found":
      return "No account found with this email address.";

    case "auth/wrong-password":
      return "Incorrect password. Please try again.";

    case "auth/invalid-credential":
      return "Invalid email or password. Please check your login details.";

    case "auth/email-already-in-use":
      return "This email is already registered. Please login instead.";

    case "auth/weak-password":
      return "Password is too weak. Please use at least 6 characters.";

    case "auth/missing-password":
      return "Please enter your password.";

    case "auth/too-many-requests":
      return "Too many attempts. Please wait a moment before trying again.";

    case "permission-denied":
      return "You do not have permission to perform this action.";

    case "unavailable":
      return "Network error. Please check your internet connection.";

    default:
      return "Something went wrong. Please try again.";
  }
}