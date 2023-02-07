import React from 'react';
import { View } from 'react-native';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { cardColor, textColor } from '../constants/colors';
import { ListItem } from '@rneui/themed';

function CustomDrawerContent(drawerProps: DrawerContentComponentProps) {
  const menuItems = [
    {
      title: 'Home',
      onPress: () => drawerProps.navigation.navigate('Apps'),
      icon: <Icon name="home" size={24} />,
    },
    {
      title: 'Quotes',
      onPress: () => drawerProps.navigation.navigate('Quotes'),
      icon: <Icon name="auto-stories" size={24} />,
    },
  ];

  return (
    <View>
      {menuItems.map((menuItem, idx) => (
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
