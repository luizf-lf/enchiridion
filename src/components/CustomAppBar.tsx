/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { AppBar, IconButton, Text } from '@react-native-material/core';

import { displayName } from '../../app.json';
import { appColors, bgColor } from '../constants/colors';
import { FAB } from '@rneui/themed';
import { Header } from '@rneui/base';

function CustomAppBar({ navigation }: any) {
  return (
    <AppBar
      title={displayName}
      style={{
        backgroundColor: appColors.primary,
      }}
      leading={() => (
        <IconButton onPress={() => navigation.openDrawer()} icon={() => <Icon name="menu" color="#FFF" size={26} />} />
      )}
    />
  );
}

export default CustomAppBar;
