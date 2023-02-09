import React from 'react';
import { View } from 'react-native';
import { Text } from '@react-native-material/core';
import { globalStyles } from '../constants/globalStyles';
import { textColor } from '../constants/colors';

// TODO: Add dark theme settings
function SettingsScreen() {
  return (
    <View style={globalStyles.viewContainer}>
      <Text color={textColor}>Settings Screen</Text>
    </View>
  );
}

export default SettingsScreen;
