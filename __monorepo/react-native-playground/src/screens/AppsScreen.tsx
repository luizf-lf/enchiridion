import { Surface, Text } from '@react-native-material/core';
import { NavigationContext } from '@react-navigation/native';
import React from 'react';
import { TouchableOpacity, useWindowDimensions, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { cardColor, textColor } from '../constants/colors';
import { globalStyles } from '../constants/globalStyles';
import { menuItems } from '../constants/menuItems';

function AppsScreen() {
  const navigation = React.useContext(NavigationContext);

  const { width, height } = useWindowDimensions();
  const rowChunkSize = Math.ceil((width / height) * 3);

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
                onPress={() => navigation && navigation.navigate(button.target)}
                style={{
                  paddingVertical: 32,
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Icon name={button.iconName} size={24} />
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
