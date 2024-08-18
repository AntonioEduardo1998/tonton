import { Header } from '@components/Header';
import { Text } from '@components/Text';
import ProductItem from '@modules/Products/components/ProductItem';
import { Container } from '@modules/Products/screens/ProductList/styles';
import { Product } from '@modules/Products/typings/products';
import { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList } from 'react-native';
import { useGetGamesQuery } from 'src/services/gamesApi';

export function ProductList() {
  const [page, setPage] = useState(0);

  const [localProducts, setLocalProducts] = useState<Product[]>([]);

  const { data: products = [], error, isLoading } = useGetGamesQuery(page);

  useEffect(() => {
    if (products && products.length) {
      setLocalProducts((prevProducts) => [...prevProducts, ...products]);
    }
  }, [products]);

  const loadMoreProducts = () => {
    setPage((prevPage) => prevPage + 1);
  };

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
        data={localProducts}
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
