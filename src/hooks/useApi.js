import { useState, useEffect } from 'react';
import axios from 'axios';

const useApi = (url, method = 'GET', body = null, headers = {}) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array ensures this effect runs only once on mount

  const fetchData = async () => {
    try {
      const response = await axios({
        url,
        method,
        data: body,
        headers,
      });
      setData(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { data, error, loading };
};

export default useApi;
