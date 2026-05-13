import AppButton from "@/components/AppButton";
import GradientBackground from "@/components/GradientBackground";
import { Colors } from "@/constants/Colors";
import { auth } from "@/services/firebaseConfig";
import { router } from "expo-router";
import { sendPasswordResetEmail } from "firebase/auth";
import { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function ForgotPasswordScreen() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleResetPassword() {
    if (!email.trim()) {
      Alert.alert(
        "Missing Email",
        "Please enter your email address first."
      );
      return;
    }

    try {
      setLoading(true);

      await sendPasswordResetEmail(auth, email.trim());

      Alert.alert(
        "Reset Link Sent",
        "Please check your email for the password reset link."
      );

      router.back();
    } catch (error: any) {
      Alert.alert("Reset Failed", getResetErrorMessage(error.code));
    } finally {
      setLoading(false);
    }
  }

  function getResetErrorMessage(errorCode: string) {
    switch (errorCode) {
      case "auth/invalid-email":
        return "The email address is not valid.";
      case "auth/user-not-found":
        return "No account was found using this email.";
      case "auth/too-many-requests":
        return "Too many requests. Please try again later.";
      default:
        return "Something went wrong. Please try again.";
    }
  }

  return (
    <GradientBackground>
      <KeyboardAvoidingView
        style={styles.keyboardView}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.content}
        >
          <View style={styles.header}>
            <Text style={styles.title}>Forgot Password</Text>
            <Text style={styles.subtitle}>
              Enter your email address and we will send you a password reset
              link.
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.label}>Email Address</Text>

            <TextInput
              style={styles.input}
              placeholder="Enter your email"
              placeholderTextColor={Colors.mutedText}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />

            <AppButton
              title="Send Reset Link"
              onPress={handleResetPassword}
              loading={loading}
              style={styles.button}
            />

            <Pressable
              style={({ pressed }) => [
                styles.backButton,
                pressed && styles.backButtonPressed,
              ]}
              onPress={() => router.back()}
            >
              <Text style={styles.backText}>Back to Login</Text>
            </Pressable>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </GradientBackground>
  );
}

const styles = StyleSheet.create({
  keyboardView: {
    flex: 1,
    backgroundColor: "transparent",
  },
  container: {
    flex: 1,
    backgroundColor: "transparent",
  },
  content: {
    padding: 20,
    paddingTop: 35,
    paddingBottom: 40,
  },
  header: {
    alignItems: "center",
    marginBottom: 22,
  },
  title: {
    fontSize: 34,
    fontWeight: "900",
    color: Colors.white,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 15,
    fontWeight: "600",
    color: "rgba(255, 255, 255, 0.88)",
    textAlign: "center",
    lineHeight: 22,
    marginTop: 8,
    maxWidth: 330,
  },
  card: {
    backgroundColor: "rgba(255, 255, 255, 0.92)",
    borderRadius: 28,
    padding: 22,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.65)",
  },
  label: {
    fontSize: 13,
    fontWeight: "900",
    color: Colors.text,
    marginBottom: 8,
    marginTop: 12,
  },
  input: {
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 16,
    paddingHorizontal: 14,
    paddingVertical: 14,
    fontSize: 15,
    color: Colors.text,
    fontWeight: "600",
  },
  button: {
    marginTop: 22,
  },
  backButton: {
    marginTop: 18,
    alignItems: "center",
  },
  backButtonPressed: {
    opacity: 0.6,
  },
  backText: {
    fontSize: 14,
    fontWeight: "900",
    color: Colors.primary,
  },
});