import { useState } from 'react';
import { fetchMultipleStocks } from '../services/comparisonService';

export const useComparison = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const compareStocks = async (symbols) => {
    setLoading(true);
    try {
      const results = await fetchMultipleStocks(symbols);
      setData(results);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return { comparisonData: data, loading, compareStocks };
};