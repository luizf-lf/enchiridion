import { Surface, Text } from '@react-native-material/core';
import { NavigationContext } from '@react-navigation/native';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { cardColor, textColor } from '../constants/colors';
import { globalStyles } from '../constants/globalStyles';

function AppsScreen() {
  const navigation = React.useContext(NavigationContext);
  const menuItems = [
    {
      title: 'Quotes',
      onPress: () => navigation && navigation.navigate('Quotes'),
      icon: <Icon name="auto-stories" size={32} />,
    },
    {
      title: 'Settings',
      onPress: () => navigation && navigation.navigate('Settings'),
      icon: <Icon name="settings" size={32} />,
    },
  ];

  const rowChunks = [];
  for (let i = 0; i < menuItems.length; i += 2) {
    rowChunks.push(menuItems.slice(i, i + 2));
  }

  return (
    <View style={globalStyles.viewContainer}>
      <Text variant="h6" style={{ marginBottom: 16 }}>
        Available Apps
      </Text>
      {rowChunks.map((appsRow, rowId) => (
        <View
          style={{
            flexDirection: 'row',
            gap: 16,
            marginBottom: 16,
          }}
          key={`appRow_${rowId}`}>
          {appsRow.map((button, idx) => (
            <Surface
              elevation={2}
              style={{
                backgroundColor: cardColor,
                borderRadius: 16,
                flexGrow: 1,
              }}
              key={`${rowId}__${idx}`}>
              <TouchableOpacity
                onPress={button.onPress}
                style={{
                  padding: 32,
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                {button.icon}
                <Text color={textColor}>{button.title}</Text>
              </TouchableOpacity>
            </Surface>
          ))}
        </View>
      ))}
    </View>
  );
}

export default AppsScreen;
