import { Header } from '@components/Header';
import { Text } from '@components/Text';
import ProductItem from '@modules/Products/components/ProductItem';
import { useProductList } from '@modules/Products/hooks/useProductList';
import { Container } from '@modules/Products/screens/ProductList/styles';
import { ActivityIndicator, FlatList } from 'react-native';

export function ProductList() {
  const { products, error, isLoading, loadMoreProducts, page } = useProductList();

  if (isLoading && page === 0) {
    return <ActivityIndicator size="large" />;
  }

  if (error) {
    return <Text>Ocorreu um erro</Text>;
  }

  return (
    <Container>
      <Header showCartButton>
        <Header.Title>Ofertas do dia</Header.Title>
      </Header>
      <FlatList
        data={products}
        keyExtractor={(item) => item.dealID}
        renderItem={({ item }) => <ProductItem product={item} />}
        onEndReached={loadMoreProducts}
        onEndReachedThreshold={0.5}
        numColumns={2}
        initialNumToRender={10}
        maxToRenderPerBatch={10}
      />
    </Container>
  );
}
