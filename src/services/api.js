const API_KEY = process.env.REACT_APP_STOCK_API_KEY;

export const fetchStockData = async (symbol) => {
  const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${API_KEY}`;
  const response = await fetch(url);
  return await response.json();
};