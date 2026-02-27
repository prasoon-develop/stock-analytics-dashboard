import React from 'react';

const ComparisonEngine = ({ comparisonData }) => {
  if (!comparisonData || comparisonData.length === 0) return null;

  return (
    <div style={{ marginTop: '30px', padding: '20px', background: '#0f172a', borderRadius: '12px' }}>
      <h3>Stock Comparison</h3>
      <div style={{ display: 'flex', gap: '20px', marginTop: '10px' }}>
        {comparisonData.map((item) => (
          <div key={item.symbol} style={{ flex: 1, padding: '15px', background: '#1e293b', borderRadius: '8px' }}>
            <strong>{item.symbol}</strong>
            <p>Avg: ${ (item.data.reduce((a, b) => a + b, 0) / item.data.length).toFixed(2) }</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComparisonEngine;