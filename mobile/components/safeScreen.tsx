import { View, Text } from 'react-native';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Colors } from '@/constants/colors';

const SafeScreen = ({ children }) => {
  const insects = useSafeAreaInsets();
  return (
    <View style={{ paddingTop: insects.top, backgroundColor: Colors.light.primary }}>
      {children}
    </View>
  );
};

export default SafeScreen;
