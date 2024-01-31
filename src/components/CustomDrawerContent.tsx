import React from 'react';
import { View } from 'react-native';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { cardColor, textColor } from '../constants/colors';
import { ListItem } from '@rneui/themed';
import { menuItems } from '../constants/menuItems';

function CustomDrawerContent(drawerProps: DrawerContentComponentProps) {
  return (
    <View>
      {menuItems.map((menuItem, idx) => (
        // Using ListItem from react-native-elements since the element from react-native-material doesn't
        //  work with custom bg colors
        <ListItem
          onPress={() => drawerProps.navigation.navigate(menuItem.target)}
          key={idx}
          containerStyle={{ backgroundColor: cardColor }}>
          <Icon name={menuItem.iconName} size={24} />
          <ListItem.Content>
            <ListItem.Title style={{ color: textColor }}>{menuItem.title}</ListItem.Title>
          </ListItem.Content>
          <Icon name="chevron-right" size={18} />
        </ListItem>
      ))}
    </View>
  );
}

export default CustomDrawerContent;
