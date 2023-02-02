/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { AppBar, IconButton } from '@react-native-material/core';

import { displayName } from '../../app.json';
import { appColors } from '../constants/colors';

function CustomAppBar({ navigation }: any) {
  return (
    <AppBar
      title={displayName}
      style={{
        backgroundColor: appColors.primary,
      }}
      leading={() => (
        <IconButton
          onPress={() => navigation.openDrawer()}
          icon={() => <Icon name="menu" color="#FFF" size={26} />}
        />
      )}
    />
  );
}

export default CustomAppBar;
