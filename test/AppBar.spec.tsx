import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import CustomAppBar from '../src/components/CustomAppBar';

describe('Custom app bar component', () => {
  it('Renders correctly', () => {
    expect(renderer.create(<CustomAppBar />).toJSON()).toMatchSnapshot();
  });
});
