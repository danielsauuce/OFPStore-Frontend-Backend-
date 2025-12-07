import { Stack } from 'expo-router';
import SafeScreen from '@/components/safeScreen';
import { Colors } from '@/constants/colors';

export default function RootLayout() {
  return (
    <SafeScreen>
      <Stack screenOptions={{ headerBackTitle: 'Back' }}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </SafeScreen>
  );
}
