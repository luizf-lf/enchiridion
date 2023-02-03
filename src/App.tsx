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

const Drawer = createDrawerNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer theme={isDarkMode ? DarkTheme : DefaultTheme}>
      <StatusBar backgroundColor={appColors.shadow} />
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          header: CustomAppBar,
        }}
        drawerContent={CustomDrawerContent}>
        {/* TODO: The home will be the stack navigator, and the custom drawer will only trigger the route change */}
        <Drawer.Screen name="Main" component={Router} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
