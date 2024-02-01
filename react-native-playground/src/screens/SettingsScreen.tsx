import React from 'react';
import { View } from 'react-native';
import { Text } from '@react-native-material/core';
import { globalStyles } from '../constants/globalStyles';
import { textColor } from '../constants/colors';
import { version } from '../../package.json';

// TODO: Add dark theme settings
function SettingsScreen() {
  return (
    <View style={globalStyles.viewContainer}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'baseline',
        }}>
        <Text color={textColor} variant="h5">
          Settings
        </Text>
        <Text color={textColor} variant="caption">
          RNPlayground v{version}
        </Text>
      </View>
    </View>
  );
}

export default SettingsScreen;
