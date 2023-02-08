import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import WebView from 'react-native-webview';
import AppsScreen from './screens/AppsScreen';
import QuoteScreen from './screens/QuoteScreen';
import SettingsScreen from './screens/SettingsScreen';
import WebViewScreen from './screens/WebViewScreen';

const Stack = createNativeStackNavigator();

function Router() {
  return (
    <Stack.Navigator initialRouteName="Apps">
      <Stack.Group
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Apps" component={AppsScreen} />
        <Stack.Screen name="Quotes" component={QuoteScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen
          name="Webview"
          component={WebViewScreen}
          options={{
            headerShown: true,
            headerTitle: 'Google',
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}

export default Router;
