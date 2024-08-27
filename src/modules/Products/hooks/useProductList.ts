import { useState, useEffect, useCallback } from 'react';
import { useGetGamesQuery } from '@services/gamesApi';
import { Product } from '@modules/Products/typings/products';

export function useProductList() {
  const [page, setPage] = useState(0);
  const [localProducts, setLocalProducts] = useState<Product[]>([]);

  const { data: products = [], error, isLoading, isFetching } = useGetGamesQuery(page);

  useEffect(() => {
    if (products.length) {
      setLocalProducts((prevProducts) => {
        const productIds = new Set(prevProducts.map((p) => p.dealID));
        const newProducts = products.filter((p: Product) => !productIds.has(p.dealID));

        return [...prevProducts, ...newProducts];
      });
    }
  }, [products]);

  const loadMoreProducts = useCallback(() => {
    if (!isLoading) {
      setPage((prevPage) => prevPage + 1);
    }
  }, [isLoading]);

  return {
    products: localProducts,
    error,
    isLoading,
    isFetching,
    loadMoreProducts,
    page,
  };
}
