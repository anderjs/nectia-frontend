import React from 'react';
import { useDispatch, useSelector } from 'react-redux'

// - Selector
import { productsSelector } from 'src/store/reducers/products/selector';
import { fetchProductsThunk } from 'src/store/reducers/products/thunks';

export default function useProducts () {
  const dispatch = useDispatch();

  const products = useSelector(productsSelector);

  const handleFetchProducts = React.useCallback(() => {
    dispatch(fetchProductsThunk());
  }, [dispatch]);

  return {
    products,
    handleFetchProducts
  }
}