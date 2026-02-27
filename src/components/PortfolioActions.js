import React, { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { toast } from 'react-hot-toast';

const PortfolioActions = ({ symbol, price }) => {
  const { buyStock } = usePortfolio();
  const [qty, setQty] = useState(1);

  const handleBuy = () => {
    const success = buyStock(symbol, price, qty);
    if (success) {
      toast.success(`Bought ${qty} shares of ${symbol}`);
    } else {
      toast.error("Insufficient balance!");
    }
  };

  return (
    <div style={{ padding: '20px', background: '#0f172a', borderRadius: '12px', border: '1px solid #334155' }}>
      <h4 style={{ margin: '0 0 10px 0' }}>Trade {symbol}</h4>
      <input 
        type="number" 
        value={qty} 
        onChange={(e) => setQty(Number(e.target.value))}
        style={{ width: '60px', padding: '8px', marginRight: '10px', background: '#1e293b', border: '1px solid #334155', color: '#fff' }}
      />
      <button onClick={handleBuy} style={{ background: '#38bdf8', border: 'none', padding: '8px 15px', borderRadius: '6px', cursor: 'pointer' }}>
        Buy
      </button>
    </div>
  );
};

export default PortfolioActions;