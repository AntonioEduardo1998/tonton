import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ProductList } from '@modules/Products/screens/ProductList';
import { ShoppingCartList } from '@modules/ShoppingCart/screens/ShoppingCartList';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="ProductList" component={ProductList} />
      <Screen name="ShoppingCartList" component={ShoppingCartList} />
    </Navigator>
  );
}
