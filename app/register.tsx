import AppButton from "@/components/AppButton";
import GradientBackground from "@/components/GradientBackground";
import { Colors } from "@/constants/Colors";
import { auth, db } from "@/services/firebaseConfig";
import { router } from "expo-router";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
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

export default function RegisterScreen() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [loading, setLoading] = useState(false);

  async function handleRegister() {
    if (
      !fullName.trim() ||
      !email.trim() ||
      !password.trim() ||
      !confirmPassword.trim()
    ) {
      Alert.alert("Missing Fields", "Please complete all fields.");
      return;
    }

    if (password.length < 6) {
      Alert.alert(
        "Weak Password",
        "Password must be at least 6 characters long."
      );
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert(
        "Password Mismatch",
        "Password and confirm password do not match."
      );
      return;
    }

    try {
      setLoading(true);

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email.trim(),
        password
      );

      await updateProfile(userCredential.user, {
        displayName: fullName.trim(),
      });

      await setDoc(doc(db, "users", userCredential.user.uid), {
        fullName: fullName.trim(),
        email: email.trim(),
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      });

      Alert.alert(
        "Account Created",
        "Your account has been created successfully."
      );

      router.replace("/(tabs)");
    } catch (error: any) {
      Alert.alert("Registration Failed", getRegisterErrorMessage(error.code));
    } finally {
      setLoading(false);
    }
  }

  function getRegisterErrorMessage(errorCode: string) {
    switch (errorCode) {
      case "auth/invalid-email":
        return "The email address is not valid.";
      case "auth/email-already-in-use":
        return "This email is already registered.";
      case "auth/weak-password":
        return "Password must be at least 6 characters long.";
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
            <Text style={styles.title}>Create Account</Text>
            <Text style={styles.subtitle}>
              Join Battle of Minds and start saving your quiz progress.
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.label}>Full Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your full name"
              placeholderTextColor={Colors.mutedText}
              value={fullName}
              onChangeText={setFullName}
            />

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

            <Text style={styles.label}>Password</Text>
            <View style={styles.passwordBox}>
              <TextInput
                style={styles.passwordInput}
                placeholder="Enter your password"
                placeholderTextColor={Colors.mutedText}
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
                autoCapitalize="none"
              />

              <Pressable
                style={styles.eyeButton}
                onPress={() => setShowPassword((previous) => !previous)}
              >
                <Text style={styles.eyeText}>
                  {showPassword ? "🙈" : "👁️"}
                </Text>
              </Pressable>
            </View>

            <Text style={styles.label}>Confirm Password</Text>
            <View style={styles.passwordBox}>
              <TextInput
                style={styles.passwordInput}
                placeholder="Confirm your password"
                placeholderTextColor={Colors.mutedText}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry={!showConfirmPassword}
                autoCapitalize="none"
              />

              <Pressable
                style={styles.eyeButton}
                onPress={() =>
                  setShowConfirmPassword((previous) => !previous)
                }
              >
                <Text style={styles.eyeText}>
                  {showConfirmPassword ? "🙈" : "👁️"}
                </Text>
              </Pressable>
            </View>

            <Text style={styles.passwordHint}>
              Use at least 6 characters for your password.
            </Text>

            <AppButton
              title="Create Account"
              onPress={handleRegister}
              loading={loading}
              style={styles.registerButton}
            />

            <View style={styles.footerRow}>
              <Text style={styles.footerText}>Already have an account?</Text>
              <Pressable onPress={() => router.push("/login")}>
                <Text style={styles.footerLink}> Login</Text>
              </Pressable>
            </View>
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
  passwordBox: {
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  passwordInput: {
    flex: 1,
    paddingHorizontal: 14,
    paddingVertical: 14,
    fontSize: 15,
    color: Colors.text,
    fontWeight: "600",
  },
  eyeButton: {
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
  eyeText: {
    fontSize: 20,
  },
  passwordHint: {
    fontSize: 12,
    fontWeight: "700",
    color: Colors.mutedText,
    marginTop: 10,
    lineHeight: 18,
  },
  registerButton: {
    marginTop: 22,
  },
  footerRow: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  footerText: {
    fontSize: 14,
    fontWeight: "700",
    color: Colors.mutedText,
  },
  footerLink: {
    fontSize: 14,
    fontWeight: "900",
    color: Colors.primary,
  },
});