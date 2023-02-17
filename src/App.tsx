import React from 'react';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomAppBar from './components/CustomAppBar';
import CustomDrawerContent from './components/CustomDrawerContent';
import { StatusBar } from 'react-native';
import { appColors, isDarkMode } from './constants/colors';
import Router from './Router';
import { AuthContextProvider } from './context/AuthContext';

const Drawer = createDrawerNavigator();

function App(): JSX.Element {
  return (
    <AuthContextProvider>
      <NavigationContainer theme={isDarkMode ? DarkTheme : DefaultTheme}>
        <StatusBar backgroundColor={appColors.shadow} />
        <Drawer.Navigator
          initialRouteName="Home"
          screenOptions={{
            header: CustomAppBar,
          }}
          drawerContent={CustomDrawerContent}>
          <Drawer.Screen name="Home" component={Router} />
        </Drawer.Navigator>
      </NavigationContainer>
    </AuthContextProvider>
  );
}

export default App;
