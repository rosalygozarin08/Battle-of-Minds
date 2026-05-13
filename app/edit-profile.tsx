import AppButton from "@/components/AppButton";
import GradientBackground from "@/components/GradientBackground";
import ScreenHeader from "@/components/ScreenHeader";
import { Colors } from "@/constants/Colors";
import { auth } from "@/services/firebaseConfig";
import { updateUserProfile } from "@/services/userService";
import { router } from "expo-router";
import { onAuthStateChanged, User } from "firebase/auth";
import { useEffect, useState } from "react";
import {
    Alert,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";

export default function EditProfileScreen() {
  const [user, setUser] = useState<User | null>(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [authLoading, setAuthLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setFullName(currentUser?.displayName || "");
      setEmail(currentUser?.email || "");
      setAuthLoading(false);
    });

    return unsubscribe;
  }, []);

  async function handleSaveChanges() {
    if (!user) {
      Alert.alert("Login Required", "Please login before editing your profile.");
      return;
    }

    if (!fullName.trim()) {
      Alert.alert("Missing Name", "Please enter your full name.");
      return;
    }

    try {
      setSaving(true);

      await updateUserProfile({
        user,
        fullName,
      });

      Alert.alert(
        "Profile Updated",
        "Your profile information has been updated successfully.",
        [
          {
            text: "OK",
            onPress: () => router.back(),
          },
        ]
      );
    } catch (error: any) {
      Alert.alert("Update Failed", error.message);
    } finally {
      setSaving(false);
    }
  }

  if (authLoading) {
    return (
      <GradientBackground>
        <View style={styles.centerContainer}>
          <Text style={styles.loadingText}>Loading profile...</Text>
        </View>
      </GradientBackground>
    );
  }

  if (!user) {
    return (
      <GradientBackground>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.content}
        >
          <ScreenHeader
            title="Edit Profile"
            subtitle="Login first before updating your profile information."
          />

          <View style={styles.card}>
            <Text style={styles.emptyIcon}>👤</Text>
            <Text style={styles.emptyTitle}>No account found</Text>
            <Text style={styles.emptyText}>
              You need to login before editing your profile.
            </Text>

            <AppButton
              title="Go to Login"
              onPress={() => router.replace("/login")}
              style={styles.button}
            />
          </View>
        </ScrollView>
      </GradientBackground>
    );
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
          <ScreenHeader
            title="Edit Profile"
            subtitle="Update your name so your learning profile feels more personal."
          />

          <View style={styles.card}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>
                {fullName ? fullName.charAt(0).toUpperCase() : "U"}
              </Text>
            </View>

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
              style={[styles.input, styles.disabledInput]}
              placeholder="Email address"
              placeholderTextColor={Colors.mutedText}
              value={email}
              editable={false}
            />

            <Text style={styles.helpText}>
              Email editing is disabled for now because Firebase usually requires
              account verification before changing an email address.
            </Text>

            <AppButton
              title="Save Changes"
              onPress={handleSaveChanges}
              loading={saving}
              style={styles.button}
            />

            <AppButton
              title="Cancel"
              variant="outline"
              onPress={() => router.back()}
              style={styles.cancelButton}
            />
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
    paddingTop: 20,
    paddingBottom: 40,
  },
  centerContainer: {
    flex: 1,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  loadingText: {
    fontSize: 16,
    fontWeight: "800",
    color: Colors.white,
  },
  card: {
    backgroundColor: "rgba(255, 255, 255, 0.92)",
    borderRadius: 28,
    padding: 22,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.65)",
  },
  avatar: {
    width: 86,
    height: 86,
    borderRadius: 43,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginBottom: 18,
  },
  avatarText: {
    fontSize: 36,
    fontWeight: "900",
    color: Colors.white,
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
  disabledInput: {
    backgroundColor: Colors.softBackground,
    color: Colors.mutedText,
  },
  helpText: {
    fontSize: 12,
    fontWeight: "700",
    color: Colors.mutedText,
    lineHeight: 18,
    marginTop: 10,
  },
  button: {
    marginTop: 22,
    width: "100%",
  },
  cancelButton: {
    marginTop: 12,
    width: "100%",
  },
  emptyIcon: {
    fontSize: 54,
    textAlign: "center",
    marginBottom: 12,
  },
  emptyTitle: {
    fontSize: 22,
    fontWeight: "900",
    color: Colors.darkPurple,
    textAlign: "center",
    marginBottom: 8,
  },
  emptyText: {
    fontSize: 14,
    fontWeight: "600",
    color: Colors.mutedText,
    textAlign: "center",
    lineHeight: 21,
  },
});