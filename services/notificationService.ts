import AsyncStorage from "@react-native-async-storage/async-storage";

export type AppNotification = {
  id: string;
  icon: string;
  title: string;
  message: string;
  time: string;
  unread: boolean;
};

const NOTIFICATIONS_KEY = "battle_of_minds_notifications";

const defaultNotifications: AppNotification[] = [
  {
    id: "1",
    icon: "🧠",
    title: "Ready for another quiz?",
    message: "Take a short quiz today and keep your learning momentum going.",
    time: "Today",
    unread: true,
  },
  {
    id: "2",
    icon: "📚",
    title: "Review your mistakes",
    message:
      "Your previous answers can help you understand what to improve next.",
    time: "Today",
    unread: true,
  },
  {
    id: "3",
    icon: "✨",
    title: "Small progress still matters",
    message: "Even one completed topic can help you become more confident.",
    time: "Yesterday",
    unread: false,
  },
];

export async function getNotifications(): Promise<AppNotification[]> {
  const savedNotifications = await AsyncStorage.getItem(NOTIFICATIONS_KEY);

  if (!savedNotifications) {
    await AsyncStorage.setItem(
      NOTIFICATIONS_KEY,
      JSON.stringify(defaultNotifications)
    );

    return defaultNotifications;
  }

  return JSON.parse(savedNotifications);
}

export async function saveNotifications(notifications: AppNotification[]) {
  await AsyncStorage.setItem(NOTIFICATIONS_KEY, JSON.stringify(notifications));
}

export async function getUnreadNotificationCount() {
  const notifications = await getNotifications();
  return notifications.filter((item) => item.unread).length;
}

export async function markNotificationAsRead(notificationId: string) {
  const notifications = await getNotifications();

  const updatedNotifications = notifications.map((item) =>
    item.id === notificationId
      ? {
          ...item,
          unread: false,
        }
      : item
  );

  await saveNotifications(updatedNotifications);

  return updatedNotifications;
}

export async function markAllNotificationsAsRead() {
  const notifications = await getNotifications();

  const updatedNotifications = notifications.map((item) => ({
    ...item,
    unread: false,
  }));

  await saveNotifications(updatedNotifications);

  return updatedNotifications;
}

export async function clearAllNotifications() {
  await saveNotifications([]);
  return [];
}

export async function addNotification(data: {
  icon: string;
  title: string;
  message: string;
  time?: string;
}) {
  const notifications = await getNotifications();

  const newNotification: AppNotification = {
    id: Date.now().toString(),
    icon: data.icon,
    title: data.title,
    message: data.message,
    time: data.time || "Just now",
    unread: true,
  };

  const updatedNotifications = [newNotification, ...notifications];

  await saveNotifications(updatedNotifications);

  return updatedNotifications;
}

export async function deleteNotification(notificationId: string) {
  const notifications = await getNotifications();

  const updatedNotifications = notifications.filter(
    (item) => item.id !== notificationId
  );

  await saveNotifications(updatedNotifications);

  return updatedNotifications;
}