import React from 'react';
import useApi from '../../hooks/useApi';
import API_ENDPOINTS from '../../config/apiEndpoints';

const Product = () => {
  const { data, error, loading } = useApi(API_ENDPOINTS.GET_DATA);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Data from API:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default Product;
