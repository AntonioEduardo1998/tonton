import Toast from 'react-native-toast-message';
import theme from '@theme/index';

export function showToast(message: string) {
  Toast.show({
    text1: message,
    topOffset: 50,
    visibilityTime: 1500,
    text1Style: {
      fontFamily: theme.FONT_FAMILY.BOLD,
      fontSize: theme.FONT_SIZE.MD,
      color: theme.COLORS.PURPLE_800,
    },
  });
}
