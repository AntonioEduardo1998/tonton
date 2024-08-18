import { Card } from '@components/Card';
import {
  CartActionButton,
  ProductBanner,
  ProductContent,
  ProductInfo,
} from '@modules/Products/components/ProductItem/styles';
import { Text } from '@components/Text';
import { MaterialIcons } from '@expo/vector-icons';
import {
  addItemToCart,
  removeItemFromCart,
  selectIsInCart,
} from '@modules/ShoppingCart/state/slices/cart.slice';
import { Product } from '@modules/Products/typings/products';
import { showToast } from '@utils/showToast';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import theme from 'src/theme';

interface ProductItemProps {
  product: Product;
}

const ProductItem: React.FC<ProductItemProps> = React.memo(({ product }) => {
  const dispatch = useDispatch();

  const addToCart = (product: Product) => {
    dispatch(addItemToCart(product));
    showToast('adicionado ao carrinho');
  };

  const removeFromCart = (dealId: string) => {
    dispatch(removeItemFromCart(dealId));
    showToast('removido do carrinho');
  };

  const productIsInCart = useSelector(selectIsInCart(product.dealID));

  return (
    <Card>
      <ProductContent>
        <ProductBanner source={{ uri: product.thumb }} />
        <ProductInfo>
          <Text numberOfLines={1}>{product.title}</Text>
          <Text>R$ {product.salePrice}</Text>
        </ProductInfo>
      </ProductContent>
      <CartActionButton
        onPress={() => (productIsInCart ? removeFromCart(product.dealID) : addToCart(product))}>
        <MaterialIcons
          name={!productIsInCart ? 'add-shopping-cart' : 'remove-shopping-cart'}
          size={theme.FONT_SIZE.XL}
          color={theme.COLORS.WHITE}
        />
        <Text>{!productIsInCart ? 'Comprar' : 'Remover'}</Text>
      </CartActionButton>
    </Card>
  );
});

ProductItem.displayName = 'ProductItem';

export default ProductItem;
