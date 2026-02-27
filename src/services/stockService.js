export const fetchStockData = async (symbol) => {
  // Yahan tumhari API call hogi. 
  // Simulation:
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Array.from({ length: 5 }, () => ({
        price: Math.floor(Math.random() * 200) + 100
      })));
    }, 500);
  });
};