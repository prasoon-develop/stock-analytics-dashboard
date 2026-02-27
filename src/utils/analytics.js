export const calculateAnalytics = (data) => {
  if (!data || data.length === 0) return null;

  const prices = data.map(d => d.price);
  const avg = prices.reduce((a, b) => a + b, 0) / prices.length;
  
  // Moving Average (Simplified)
  const ma = prices.slice(-5).reduce((a, b) => a + b, 0) / 5; 

  // Volatility (Standard Deviation - simplified)
  const variance = prices.reduce((a, b) => a + Math.pow(b - avg, 2), 0) / prices.length;
  const volatility = Math.sqrt(variance).toFixed(2);

  return { avg: avg.toFixed(2), ma: ma.toFixed(2), volatility };
};