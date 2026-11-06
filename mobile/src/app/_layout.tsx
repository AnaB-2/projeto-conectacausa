import { Stack } from "expo-router";
export default function RootLayout() {
  return <Stack initialRouteName="splash" screenOptions={{ headerShown: false, animation: "fade" }}>
    <Stack.Screen name="splash" />
    <Stack.Screen name="welcome" />
    <Stack.Screen name="index" />
    <Stack.Screen name="register" />
    <Stack.Screen name="dashboard" />
    <Stack.Screen name="categories" />
    <Stack.Screen name="ongs" />
    <Stack.Screen name="cadastroOng" />
    <Stack.Screen name="ong-profile" />
    <Stack.Screen name="donation" />
    <Stack.Screen name="about" />
    <Stack.Screen name="profile" />
    <Stack.Screen name="edit-profile" />
    <Stack.Screen name="settings" />
    <Stack.Screen name="statistics" />
    <Stack.Screen name="admin-login" />
    <Stack.Screen name="campaigns" />
    <Stack.Screen name="campaign-details" />
    <Stack.Screen name="campaign-details(animals)" />
    <Stack.Screen name="notifications" />
  </Stack>;
}
