import { Colors } from "@/constants/Colors";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: Colors.background,
          },
          headerTintColor: Colors.primary,
          headerTitleStyle: {
            fontWeight: "900",
          },
          contentStyle: {
            backgroundColor: Colors.background,
          },
        }}
      >
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

        <Stack.Screen
          name="login"
          options={{
            title: "Login",
            presentation: "card",
          }}
        />

        <Stack.Screen
          name="forgot-password"
          options={{
            title: "Forgot Password",
            presentation: "card",
          }}
        />

        <Stack.Screen
          name="register"
          options={{
            title: "Register",
            presentation: "card",
          }}
        />

        <Stack.Screen
          name="edit-profile"
          options={{
            title: "Edit Profile",
          }}
        />

        <Stack.Screen
          name="topics"
          options={{
            title: "Topics",
          }}
        />

        <Stack.Screen
          name="quiz"
          options={{
            title: "Quiz",
            headerBackTitle: "Back",
          }}
        />

        <Stack.Screen
          name="result"
          options={{
            title: "Result",
            headerBackVisible: false,
            gestureEnabled: false,
          }}
        />

        <Stack.Screen
          name="notifications"
          options={{
            title: "Notifications",
          }}
        />

        <Stack.Screen
          name="score-history"
          options={{
            title: "Score History",
          }}
        />
      </Stack>

      <StatusBar style="dark" />
    </>
  );
}
