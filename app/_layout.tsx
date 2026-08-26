import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

import { GestureHandlerRootView } from 'react-native-gesture-handler';

if (typeof globalThis !== 'undefined' && !globalThis._toString) {
  globalThis._toString = (value: unknown) => Object.prototype.toString.call(value);
}

import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

import '../global.css';
import { Text, View } from 'react-native';
import { useThemeColor } from '@/hooks/useThemeColor';
import ThemedView from '@/presentation/shared/ThemedView';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {

  const backgroundColor = useThemeColor({}, 'background');

  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ backgroundColor: backgroundColor, flex: 1 }}>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <ThemedView margin>
          <Text className='mt-10 text-3xl text-light-text dark:text-dark-text'>Hola Mundo</Text>
        </ThemedView>


        {/* <Stack>
        
      </Stack> */}
      </ThemeProvider>

    </GestureHandlerRootView>

  );
}
