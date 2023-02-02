import React from 'react';
import { View } from 'react-native';
import { ListItem } from '@react-native-material/core';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialIcons';

function CustomDrawerContent(drawerProps: DrawerContentComponentProps) {
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
}

export default CustomDrawerContent;
