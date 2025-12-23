import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import React from 'react';
import "../global.css"

type SafeScreenProps = {
  children: React.ReactNode;
};

const SafeScreen = ({ children }: SafeScreenProps) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'blue',
        paddingTop: insets.top,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}
    >
      {children}
    </View>
  );
};

export default SafeScreen;
