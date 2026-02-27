export const fetchMultipleStocks = async (symbols) => {
  try {
    // Promise.all saari requests ek saath bhejta hai (Parallel)
    const promises = symbols.map(async (symbol) => {
      // Mock API call - Real mein yahan fetch() use hoga
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            symbol,
            data: Array.from({ length: 5 }, () => Math.floor(Math.random() * 200) + 100)
          });
        }, 800);
      });
    });
    return await Promise.all(promises);
  } catch (error) {
    throw new Error("Failed to fetch comparison data");
  }
};