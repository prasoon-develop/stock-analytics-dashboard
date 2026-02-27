import React, { createContext, useContext } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {
  const [balance, setBalance] = useLocalStorage('portfolio_balance', 100000);
  const [holdings, setHoldings] = useLocalStorage('portfolio_holdings', {});
  const [investedAmount, setInvestedAmount] = useLocalStorage('invested_amount', 0); // New State

  const buyStock = (symbol, price, quantity) => {
    const totalCost = price * quantity;
    if (balance >= totalCost) {
      setBalance(prev => prev - totalCost);
      setInvestedAmount(prev => prev + totalCost); // Investment track karo
      setHoldings(prev => ({
        ...prev,
        [symbol]: (prev[symbol] || 0) + quantity
      }));
      return true;
    }
    return false;
  };

  return (
    <PortfolioContext.Provider value={{ balance, holdings, buyStock, investedAmount }}>
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => useContext(PortfolioContext);