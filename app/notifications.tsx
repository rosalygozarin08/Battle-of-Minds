import EmptyState from "@/components/EmptyState";
import GradientBackground from "@/components/GradientBackground";
import ScreenHeader from "@/components/ScreenHeader";
import { Colors } from "@/constants/Colors";
import {
  AppNotification,
  clearAllNotifications,
  deleteNotification,
  getNotifications,
  markAllNotificationsAsRead,
  markNotificationAsRead,
} from "@/services/notificationService";
import { useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import {
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function NotificationsScreen() {
  const [notifications, setNotifications] = useState<AppNotification[]>([]);
  const [loading, setLoading] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const unreadCount = notifications.filter((item) => item.unread).length;

  useFocusEffect(
    useCallback(() => {
      loadNotifications();
    }, [])
  );

  async function loadNotifications() {
    try {
      setLoading(true);
      const result = await getNotifications();
      setNotifications(result);
    } catch (error: any) {
      Alert.alert("Unable to Load Notifications", error.message);
    } finally {
      setLoading(false);
    }
  }

  async function handleMarkAllAsRead() {
    try {
      const updatedNotifications = await markAllNotificationsAsRead();
      setNotifications(updatedNotifications);
    } catch (error: any) {
      Alert.alert("Unable to Update Notifications", error.message);
    }
  }

  async function handleMarkAsRead(notificationId: string) {
    try {
      const updatedNotifications = await markNotificationAsRead(notificationId);
      setNotifications(updatedNotifications);
    } catch (error: any) {
      Alert.alert("Unable to Update Notification", error.message);
    }
  }

  function handleClearNotifications() {
    Alert.alert(
      "Clear Notifications",
      "Are you sure you want to clear all notifications?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Clear",
          style: "destructive",
          onPress: async () => {
            try {
              const updatedNotifications = await clearAllNotifications();
              setNotifications(updatedNotifications);
            } catch (error: any) {
              Alert.alert("Unable to Clear Notifications", error.message);
            }
          },
        },
      ]
    );
  }

  function handleDeleteNotification(notificationId: string) {
    Alert.alert(
      "Delete Notification",
      "Are you sure you want to delete this notification?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Delete",
          style: "destructive",
          onPress: async () => {
            try {
              setDeletingId(notificationId);

              const updatedNotifications = await deleteNotification(
                notificationId
              );

              setNotifications(updatedNotifications);
            } catch (error: any) {
              Alert.alert("Unable to Delete Notification", error.message);
            } finally {
              setDeletingId(null);
            }
          },
        },
      ]
    );
  }

  return (
    <GradientBackground>
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        <ScreenHeader
          title="Notifications"
          subtitle="Stay updated with reminders that help you continue your learning journey."
        />

        <View style={styles.summaryCard}>
          <View>
            <Text style={styles.summaryLabel}>Unread Notifications</Text>
            <Text style={styles.summaryNumber}>{unreadCount}</Text>
          </View>

          <Text style={styles.summaryIcon}>🔔</Text>
        </View>

        {notifications.length > 0 ? (
          <View style={styles.actionRow}>
            <Pressable
              style={({ pressed }) => [
                styles.actionButton,
                pressed && styles.pressedButton,
              ]}
              onPress={handleMarkAllAsRead}
            >
              <Text style={styles.actionButtonText}>Mark all as read</Text>
            </Pressable>

            <Pressable
              style={({ pressed }) => [
                styles.clearButton,
                pressed && styles.pressedButton,
              ]}
              onPress={handleClearNotifications}
            >
              <Text style={styles.clearButtonText}>Clear all</Text>
            </Pressable>
          </View>
        ) : null}

        {loading ? (
          <Text style={styles.loadingText}>Loading notifications...</Text>
        ) : notifications.length === 0 ? (
          <EmptyState
            title="No notifications"
            message="You have no notifications right now. Keep learning and new reminders may appear here."
          />
        ) : (
          <View style={styles.list}>
            {notifications.map((item) => (
              <View key={item.id} style={styles.notificationCard}>
                <Pressable
                  style={({ pressed }) => [
                    styles.notificationContent,
                    item.unread && styles.unreadCard,
                    pressed && styles.pressedCard,
                  ]}
                  onPress={() => handleMarkAsRead(item.id)}
                >
                  <View style={styles.iconBox}>
                    <Text style={styles.itemIcon}>{item.icon}</Text>
                  </View>

                  <View style={styles.textBox}>
                    <View style={styles.titleRow}>
                      <Text style={styles.notificationTitle}>{item.title}</Text>

                      {item.unread ? <View style={styles.unreadDot} /> : null}
                    </View>

                    <Text style={styles.notificationMessage}>
                      {item.message}
                    </Text>
                    <Text style={styles.timeText}>{item.time}</Text>
                  </View>
                </Pressable>

                <Pressable
                  style={({ pressed }) => [
                    styles.deleteButton,
                    pressed && styles.pressedButton,
                    deletingId === item.id && styles.disabledButton,
                  ]}
                  disabled={deletingId === item.id}
                  onPress={() => handleDeleteNotification(item.id)}
                >
                  <Text style={styles.deleteButtonText}>
                    {deletingId === item.id
                      ? "Deleting..."
                      : "Delete Notification"}
                  </Text>
                </Pressable>
              </View>
            ))}
          </View>
        )}
      </ScrollView>
    </GradientBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
  },
  content: {
    padding: 20,
    paddingTop: 20,
    paddingBottom: 40,
  },
  summaryCard: {
    backgroundColor: "rgba(255, 255, 255, 0.92)",
    borderRadius: 24,
    padding: 20,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.65)",
    marginBottom: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  summaryLabel: {
    fontSize: 13,
    fontWeight: "900",
    color: Colors.mutedText,
    textTransform: "uppercase",
    marginBottom: 4,
  },
  summaryNumber: {
    fontSize: 38,
    fontWeight: "900",
    color: Colors.primary,
  },
  summaryIcon: {
    fontSize: 42,
  },
  actionRow: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 16,
  },
  actionButton: {
    flex: 1,
    backgroundColor: Colors.primary,
    borderRadius: 16,
    paddingVertical: 13,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.35)",
  },
  actionButtonText: {
    fontSize: 13,
    fontWeight: "900",
    color: Colors.white,
  },
  clearButton: {
    flex: 1,
    backgroundColor: "#FEE2E2",
    borderRadius: 16,
    paddingVertical: 13,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#FCA5A5",
  },
  clearButtonText: {
    fontSize: 13,
    fontWeight: "900",
    color: Colors.error,
  },
  pressedButton: {
    opacity: 0.75,
  },
  disabledButton: {
    opacity: 0.6,
  },
  loadingText: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: "800",
    color: Colors.white,
    marginTop: 24,
  },
  list: {
    gap: 12,
  },
  notificationCard: {
    backgroundColor: "rgba(255, 255, 255, 0.92)",
    borderRadius: 24,
    padding: 16,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.65)",
  },
  notificationContent: {
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 14,
  },
  unreadCard: {
    backgroundColor: Colors.softBackground,
    borderRadius: 18,
    padding: 12,
    marginBottom: 14,
  },
  pressedCard: {
    opacity: 0.8,
  },
  iconBox: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.border,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  itemIcon: {
    fontSize: 22,
  },
  textBox: {
    flex: 1,
  },
  titleRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 8,
  },
  notificationTitle: {
    flex: 1,
    fontSize: 16,
    fontWeight: "900",
    color: Colors.darkPurple,
  },
  unreadDot: {
    width: 9,
    height: 9,
    borderRadius: 99,
    backgroundColor: Colors.error,
  },
  notificationMessage: {
    fontSize: 14,
    fontWeight: "600",
    color: Colors.mutedText,
    lineHeight: 20,
    marginTop: 5,
  },
  timeText: {
    fontSize: 12,
    fontWeight: "800",
    color: Colors.primary,
    marginTop: 8,
  },
  deleteButton: {
    backgroundColor: "#FEE2E2",
    borderRadius: 16,
    paddingVertical: 13,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#FCA5A5",
  },
  deleteButtonText: {
    fontSize: 14,
    fontWeight: "900",
    color: Colors.error,
  },
});