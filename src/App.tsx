/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import {AppBar, IconButton, ListItem} from '@react-native-material/core';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {displayName} from '../app.json';

const Drawer = createDrawerNavigator();

function App(): JSX.Element {
  const appBar = ({navigation}: any) => (
    <AppBar
      title={displayName}
      leading={() => (
        <IconButton
          onPress={() => navigation.openDrawer()}
          icon={() => <Icon name="menu" color="#FFF" size={26} />}
        />
      )}
    />
  );

  const drawerContent = (drawerProps: DrawerContentComponentProps) => {
    const menuItems = [
      {
        title: 'Home',
        onPress: () => drawerProps.navigation.navigate('Home'),
        icon: <Icon name="home" size={24} />,
      },
      {
        title: 'Settings',
        onPress: () => drawerProps.navigation.navigate('Settings'),
        icon: <Icon name="settings" size={24} />,
      },
    ];

    return (
      <View>
        {menuItems.map((menuItem, idx) => (
          <ListItem
            title={menuItem.title}
            onPress={menuItem.onPress}
            leading={menuItem.icon}
            trailing={<Icon name="chevron-right" size={18} />}
            key={idx}
          />
        ))}
      </View>
    );
  };

  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          header: appBar,
        }}
        drawerContent={drawerContent}>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
