import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import AppsScreen from './screens/AppsScreen';
import FireListScreen from './screens/FireListScreen';
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
        <Stack.Screen name="Fire List" component={FireListScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

export default Router;
