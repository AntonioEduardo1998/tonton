import { Routes } from '@routes/index';
import theme from 'src/theme';
import { ThemeProvider } from 'styled-components/native';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { ActivityIndicator, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { store } from '@store/store';
import Toast from 'react-native-toast-message';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <StatusBar barStyle="light-content" backgroundColor={theme.COLORS.PURPLE_500} translucent />
        {fontsLoaded ? <Routes /> : <ActivityIndicator />}
      </ThemeProvider>
      <Toast />
    </Provider>
  );
}
