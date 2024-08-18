import Toast from 'react-native-toast-message';
import theme from 'src/theme';

export function showToast(message: string) {
  Toast.show({
    text1: message,
    topOffset: 50,
    text1Style: {
      fontFamily: theme.FONT_FAMILY.BOLD,
      fontSize: theme.FONT_SIZE.MD,
      color: theme.COLORS.PURPLE_800,
    },
  });
}
