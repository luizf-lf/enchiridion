import React from 'react';
import { View } from 'react-native';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { cardColor, textColor } from '../constants/colors';
import { ListItem } from '@rneui/themed';
// import { ListItem } from '@react-native-material/core';

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
        // <ListItem
        //   title={menuItem.title}
        //   onPress={menuItem.onPress}
        //   leading={menuItem.icon}
        //   trailing={<Icon name="chevron-right" size={18} />}
        //   key={idx}
        //   style={{ backgroundColor: bgColor }}
        // />

        // Using ListItem from react-native-elements since the element from react-native-material doesn't
        //  work with custom bg colors
        <ListItem
          onPress={menuItem.onPress}
          key={idx}
          containerStyle={{ backgroundColor: cardColor }}>
          {menuItem.icon}
          <ListItem.Content>
            <ListItem.Title style={{ color: textColor }}>
              {menuItem.title}
            </ListItem.Title>
          </ListItem.Content>
          <Icon name="chevron-right" size={18} />
        </ListItem>
      ))}
    </View>
  );
}

export default CustomDrawerContent;
