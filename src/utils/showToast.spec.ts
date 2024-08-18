import Toast from 'react-native-toast-message';
import theme from '@theme/index';
import { showToast } from '@utils/showToast';

jest.mock('react-native-toast-message', () => ({
  show: jest.fn(),
}));

describe('showToast', () => {
  it('should call Toast.show with the correct parameters', () => {
    const message = 'Test message';

    showToast(message);

    expect(Toast.show).toHaveBeenCalledWith({
      text1: message,
      topOffset: 50,
      visibilityTime: 1500,
      text1Style: {
        fontFamily: theme.FONT_FAMILY.BOLD,
        fontSize: theme.FONT_SIZE.MD,
        color: theme.COLORS.PURPLE_800,
      },
    });
  });
});
