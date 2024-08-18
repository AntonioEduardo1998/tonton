import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '@screens/Home';
import { ShoppingCartList } from '@modules/ShoppingCart/screens/ShoppingCartList';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={Home} />
      <Screen name="ShoppingCartList" component={ShoppingCartList} />
    </Navigator>
  );
}
