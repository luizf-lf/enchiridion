import { DarkTheme, DefaultTheme } from '@react-navigation/native';
import { Appearance } from 'react-native';

export const appColors = {
  white: DefaultTheme.colors.background,
  dark: DarkTheme.colors.background,
  primary: '#674188',
  shadow: '#53356E',
};

export const isDarkMode = Appearance.getColorScheme() === 'dark';

export const bgColor = isDarkMode ? appColors.dark : appColors.white;
export const textColor = isDarkMode ? appColors.white : appColors.dark;
export const cardColor = isDarkMode
  ? DarkTheme.colors.card
  : DefaultTheme.colors.card;
