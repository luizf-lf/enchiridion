import React from 'react';
import {View} from 'react-native';
import {Text} from '@react-native-material/core';
import {globalStyles} from '../constants/globalStyles';

function HomeScreen() {
  return (
    <View style={globalStyles.viewContainer}>
      <Text>HomeScreen</Text>
    </View>
  );
}

export default HomeScreen;
