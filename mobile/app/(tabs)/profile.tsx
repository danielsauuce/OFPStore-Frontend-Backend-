import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Switch, Alert } from 'react-native';
import { Moon, Sun, User as UserIcon, Heart, LogOut, Package } from 'lucide-react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

export default function ProfileScreen() {
  return (
    <View className="min-h-screen bg-light-background">
      <View className="px-5 ">
        <Text>Profile Screen</Text>
        <Text>Profile Screen</Text>
        <Text>Profile Screen</Text>
      </View>
    </View>
  );
}
