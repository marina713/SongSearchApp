import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useColorScheme } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { store } from '~/state';

import { Home } from '~/screens/home';
import { darkTheme, lightTheme } from '~/constants/colors';
import { Player } from '~/screens/player';

const Stack = createNativeStackNavigator();

const App = () => {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  return (
    <NavigationContainer theme={isDarkMode ? darkTheme : lightTheme}>
      <Provider store={store}>
        <ThemeProvider theme={isDarkMode ? darkTheme.colors : lightTheme.colors}>
          <SafeAreaProvider>
            <Stack.Navigator>
              <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
              <Stack.Screen name="Player" component={Player} />
            </Stack.Navigator>
          </SafeAreaProvider>
        </ThemeProvider>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
