import { useNavigation as useReactNavigation } from '@react-navigation/native';

export function useNavigation() {
  const navigation = useReactNavigation();

  function navigateToHome() {
    navigation.navigate('ProductList');
  }

  function navigateToShoppingCart() {
    navigation.navigate('ShoppingCartList');
  }

  return {
    navigateToHome,
    navigateToShoppingCart,
  };
}
