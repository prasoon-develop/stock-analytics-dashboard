import { useState } from 'react';

export const useStockData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [currentSymbol, setCurrentSymbol] = useState('');

  const getStock = async (symbol, timeframe = '1D') => {
    if (!symbol) return;
    setLoading(true);
    setCurrentSymbol(symbol);
    
    try {
      // API Simulation
      await new Promise((resolve) => setTimeout(resolve, 800));
      
      // Mock data logic (future mein yahan API call hogi)
      const mockData = Array.from({ length: 10 }, (_, i) => ({
        date: `${i + 1}:00`,
        price: Math.floor(Math.random() * (200 - 100 + 1) + 100)
      }));
      
      setData(mockData);
    } catch (error) {
      console.error("API Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, getStock, currentSymbol };
};