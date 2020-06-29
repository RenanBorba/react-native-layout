import { Platform } from 'react-native';

export default {
  padding: 15,
  ...Platform.select({
      ios: { headerHeight: 64, headerPadding: 20 },
      android: { headerHeight: 64, headerPadding: 20 },
  }),
  tabBarHeight: 50
};