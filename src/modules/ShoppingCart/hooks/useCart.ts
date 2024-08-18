import { showToast } from '@utils/showToast';
import { Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { clearCart } from '@modules/ShoppingCart/state/slices/cart.slice';
import { addItemToCart, removeItemFromCart } from '@modules/ShoppingCart/state/slices/cart.slice';
import { Product } from '@modules/Products/typings/products';

export function useCart() {
  const dispatch = useDispatch();

  function handleClearCart() {
    dispatch(clearCart());
    showToast('Carrinho esvaziado');
  }

  function confirmClearCart() {
    Alert.alert('Remover todos os itens do carrinho?', '', [
      { text: 'cancelar', style: 'cancel' },
      { text: 'remover', onPress: handleClearCart, style: 'destructive' },
    ]);
  }

  function addToCart(product: Product) {
    dispatch(addItemToCart(product));
    showToast('Adicionado ao carrinho');
  }

  function removeToCart(dealId: string) {
    dispatch(removeItemFromCart(dealId));
    showToast('Removido do carrinho');
  }

  return {
    confirmClearCart,
    addToCart,
    removeToCart,
  };
}
