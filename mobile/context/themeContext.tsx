import { useCallback, useEffect, useMemo, useState } from 'react';
import { useColorScheme as useNativeColorScheme } from 'react-native';
import { Colors, Theme, ColorScheme } from '@/constants/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import createContextHook from '@nkzw/create-context-hook';

const THEME_STORAGE_KEY = '@olayinka_furniture_theme';

interface ThemeContextValue {
  theme: Theme;
  colors: ColorScheme;
  toggleTheme: () => void;
}

export const [ThemeProvider, useTheme] = createContextHook((): ThemeContextValue => {
  const systemColorScheme = useNativeColorScheme();
  const [theme, setTheme] = useState<Theme>((systemColorScheme as Theme) || 'light');

  useEffect(() => {
    const loadTheme = async () => {
      try {
        const stored = await AsyncStorage.getItem(THEME_STORAGE_KEY);
        if (stored && (stored === 'light' || stored === 'dark')) {
          setTheme(stored as Theme);
        }
      } catch (error) {
        console.error('Failed to load theme:', error);
      }
    };

    loadTheme();
  }, []);

  const toggleTheme = useCallback(async () => {
    const newTheme: Theme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    try {
      await AsyncStorage.setItem(THEME_STORAGE_KEY, newTheme);
    } catch (error) {
      console.error('Failed to save theme:', error);
    }
  }, [theme]);

  const colors = useMemo(() => Colors[theme], [theme]);

  return useMemo(
    () => ({
      theme,
      colors,
      toggleTheme,
    }),
    [theme, colors, toggleTheme],
  );
});
