import React from 'react';
import {View} from 'react-native';
import {Text} from '@react-native-material/core';
import {globalStyles} from '../constants/globalStyles';

function SettingsScreen() {
  return (
    <View style={globalStyles.viewContainer}>
      <Text>Settings Screen</Text>
    </View>
  );
}

export default SettingsScreen;
