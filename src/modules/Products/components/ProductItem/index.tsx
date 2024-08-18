import { Card } from '@components/Card';
import { Text } from '@components/Text';
import { MaterialIcons } from '@expo/vector-icons';
import {
  CartActionButton,
  ProductBanner,
  ProductContent,
} from '@modules/Products/components/ProductItem/styles';
import { Product } from '@modules/Products/typings/products';
import { useCart } from '@modules/ShoppingCart/hooks/useCart';
import { selectIsInCart } from '@modules/ShoppingCart/state/selectors/cart.selectors';
import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import theme from 'src/theme';

interface ProductItemProps {
  product: Product;
}

const ProductItem: React.FC<ProductItemProps> = React.memo(({ product }) => {
  const productIsInCart = useSelector(selectIsInCart(product.dealID));
  const { removeToCart, addToCart } = useCart();

  return (
    <Card>
      <ProductContent>
        <ProductBanner source={{ uri: product.thumb }} />
        <View>
          <Text align="left" numberOfLines={1}>
            {product.title}
          </Text>
          <Text>R$ {product.salePrice}</Text>
        </View>
      </ProductContent>
      <CartActionButton
        onPress={() => (productIsInCart ? removeToCart(product.dealID) : addToCart(product))}>
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
