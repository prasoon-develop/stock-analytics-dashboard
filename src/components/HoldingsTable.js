import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';

const HoldingsTable = () => {
  const { holdings, investedAmount } = usePortfolio();

  return (
    <div className="card" style={{ marginTop: '20px', background: '#0f172a', padding: '15px' }}>
      <h3 style={{ color: '#64748b' }}>Portfolio Stats</h3>
      <p style={{ color: '#fff' }}>Total Invested: <strong>${investedAmount.toLocaleString()}</strong></p>
      
      <table style={{ width: '100%', color: '#fff', borderCollapse: 'collapse', marginTop: '10px' }}>
        <thead>
          <tr style={{ color: '#64748b', textAlign: 'left' }}>
            <th>Symbol</th>
            <th>Qty</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(holdings).map(([symbol, qty]) => (
            <tr key={symbol}>
              <td style={{ padding: '10px 0' }}>{symbol}</td>
              <td>{qty}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HoldingsTable;