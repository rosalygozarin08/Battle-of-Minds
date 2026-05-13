import AppButton from "@/components/AppButton";
import GradientBackground from "@/components/GradientBackground";
import { Colors } from "@/constants/Colors";
import { auth } from "@/services/firebaseConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
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

const REMEMBER_EMAIL_KEY = "battle_of_minds_remembered_email";
const REMEMBER_ME_KEY = "battle_of_minds_remember_me";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadRememberedLogin();
  }, []);

  async function loadRememberedLogin() {
    try {
      const savedRememberMe = await AsyncStorage.getItem(REMEMBER_ME_KEY);
      const savedEmail = await AsyncStorage.getItem(REMEMBER_EMAIL_KEY);

      if (savedRememberMe === "true" && savedEmail) {
        setRememberMe(true);
        setEmail(savedEmail);
      }
    } catch {
      // App can continue even if saved email fails to load.
    }
  }

  async function handleLogin() {
    if (!email.trim() || !password.trim()) {
      Alert.alert("Missing Fields", "Please enter your email and password.");
      return;
    }

    try {
      setLoading(true);

      await signInWithEmailAndPassword(auth, email.trim(), password);

      if (rememberMe) {
        await AsyncStorage.setItem(REMEMBER_ME_KEY, "true");
        await AsyncStorage.setItem(REMEMBER_EMAIL_KEY, email.trim());
      } else {
        await AsyncStorage.removeItem(REMEMBER_ME_KEY);
        await AsyncStorage.removeItem(REMEMBER_EMAIL_KEY);
      }

      Alert.alert("Login Successful", "Welcome back to Battle of Minds!");
      router.replace("/(tabs)");
    } catch (error: any) {
      Alert.alert("Login Failed", getLoginErrorMessage(error.code));
    } finally {
      setLoading(false);
    }
  }

  function getLoginErrorMessage(errorCode: string) {
    switch (errorCode) {
      case "auth/invalid-email":
        return "The email address is not valid.";
      case "auth/user-not-found":
        return "No account was found using this email.";
      case "auth/wrong-password":
      case "auth/invalid-credential":
        return "Incorrect email or password.";
      case "auth/too-many-requests":
        return "Too many login attempts. Please try again later.";
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
            <Text style={styles.title}>Welcome Back</Text>
            <Text style={styles.subtitle}>
              Login to continue your Battle of Minds journey and save your quiz
              progress.
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

            <View style={styles.optionRow}>
              <Pressable
                style={styles.rememberRow}
                onPress={() => setRememberMe((previous) => !previous)}
              >
                <View
                  style={[
                    styles.checkbox,
                    rememberMe && styles.checkboxChecked,
                  ]}
                >
                  {rememberMe ? <Text style={styles.checkText}>✓</Text> : null}
                </View>

                <Text style={styles.rememberText}>Remember Me</Text>
              </Pressable>

              <Pressable onPress={() => router.push("/forgot-password")}>
                <Text style={styles.forgotText}>Forgot Password?</Text>
              </Pressable>
            </View>

            <AppButton
              title="Login"
              onPress={handleLogin}
              loading={loading}
              style={styles.loginButton}
            />

            <View style={styles.footerRow}>
              <Text style={styles.footerText}>Don&apos;t have an account?</Text>
              <Pressable onPress={() => router.push("/register")}>
                <Text style={styles.footerLink}> Register</Text>
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
  optionRow: {
    marginTop: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 12,
  },
  rememberRow: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  checkbox: {
    width: 22,
    height: 22,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.white,
    marginRight: 8,
  },
  checkboxChecked: {
    backgroundColor: Colors.primary,
  },
  checkText: {
    color: Colors.white,
    fontSize: 14,
    fontWeight: "900",
  },
  rememberText: {
    fontSize: 13,
    fontWeight: "800",
    color: Colors.text,
  },
  forgotText: {
    fontSize: 13,
    fontWeight: "900",
    color: Colors.primary,
  },
  loginButton: {
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