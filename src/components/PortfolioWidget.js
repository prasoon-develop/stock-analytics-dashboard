import React from 'react';
import { usePortfolio } from '../context/PortfolioContext'; 
import { Wallet } from 'lucide-react';

const PortfolioWidget = () => {
  const { balance } = usePortfolio();

  return (
    <div className="card" style={{ marginTop: '20px', border: '1px solid #334155', background: '#0f172a' }}>
      {/* Cash Balance Section */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
        <Wallet color="#10b981" />
        <h3 style={{ margin: 0 }}>Cash Balance</h3>
      </div>
      <h2 style={{ color: '#10b981', margin: '0 0 15px 0' }}>${balance.toLocaleString()}</h2>

      {/* Market Stats Section (Retained for professional look) */}
      <div style={{ marginTop: '20px', padding: '15px', background: '#1e293b', borderRadius: '12px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
          <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Market Sentiment</span>
          <span style={{ fontSize: '0.8rem', color: '#10b981' }}>Bullish</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Volatility</span>
          <span style={{ fontSize: '0.8rem', color: '#f59e0b' }}>Low</span>
        </div>
      </div>
    </div>
  );
};

export default PortfolioWidget;