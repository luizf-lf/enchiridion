import React from 'react';
import { View, Text } from 'react-native';
import { Copyright } from '../Copyright';

import { feedbackTypes } from '../../utils/feedbackTypes';
import { styles } from './styles';
import { Option } from '../Option';

export function Options() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Deixe Seu Feedback</Text>
      <View style={styles.options}>
        {Object.entries(feedbackTypes).map(([key, value]) => (
          <Option title={value.title} image={value.image} key={key} />
        ))}
      </View>
      <Copyright />
    </View>
  );
}
