import { Surface, Text } from '@react-native-material/core';
import { NavigationContext } from '@react-navigation/native';
import React from 'react';
import { TouchableOpacity, useWindowDimensions, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { cardColor, textColor } from '../constants/colors';
import { globalStyles } from '../constants/globalStyles';

function AppsScreen() {
  const navigation = React.useContext(NavigationContext);

  const { width, height } = useWindowDimensions();
  const rowChunkSize = Math.ceil((width / height) * 3);

  const menuItems = [
    {
      title: 'Quotes',
      onPress: () => navigation && navigation.navigate('Quotes'),
      icon: <Icon name="auto-stories" size={32} />,
    },
    {
      title: 'Webview',
      onPress: () => navigation && navigation.navigate('Webview'),
      icon: <Icon name="integration-instructions" size={24} />,
    },
    {
      title: 'Fire List',
      onPress: () => navigation && navigation.navigate('Fire List'),
      icon: <Icon name="check-box" size={24} />,
    },
    {
      title: 'Settings',
      onPress: () => navigation && navigation.navigate('Settings'),
      icon: <Icon name="settings" size={32} />,
    },
  ];

  const rowChunks = [];
  for (let i = 0; i < menuItems.length; i += rowChunkSize) {
    rowChunks.push(menuItems.slice(i, i + rowChunkSize));
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
