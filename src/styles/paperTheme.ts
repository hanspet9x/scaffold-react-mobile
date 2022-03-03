import {Colors, DefaultTheme} from 'react-native-paper';
import {fontFamily} from '../assets/assets';
export const appTheme: ReactNativePaper.Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: Colors.white,
    text: Colors.grey700,
    primary: '#627b3f',
    surface: Colors.grey100,
    accent: Colors.brown800,
    placeholder: Colors.grey400,
  },
  fonts: {
    ...DefaultTheme.fonts,
    medium: {
      fontFamily: fontFamily.semiBold,
    },
    regular: {
      fontFamily: fontFamily.medium,
    },
    light: {
      fontFamily: fontFamily.regular,
    },
  },
  animation: {
    scale: 1,
  },
};
