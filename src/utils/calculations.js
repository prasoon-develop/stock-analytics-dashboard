export const calculateROI = (currentValue, totalInvestment) => {
  if (totalInvestment === 0) return 0;
  return (((currentValue - totalInvestment) / totalInvestment) * 100).toFixed(2);
};