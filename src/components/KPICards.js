import React, { useMemo } from 'react';

const KPICards = ({ data }) => {
  // useMemo ka magic: sirf tabhi chalega jab 'data' change hoga
  const stats = useMemo(() => {
    if (!data || data.length === 0) return null;
    
    const latest = data[data.length - 1];
    const prices = data.map(item => item.price);
    const max = Math.max(...prices);
    const min = Math.min(...prices);
    
    return {
      current: latest.price.toFixed(2),
      high: max.toFixed(2),
      low: min.toFixed(2),
      volume: '1.2M', // Mock data for now
    };
  }, [data]);

  if (!stats) return null;

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '15px', marginBottom: '20px' }}>
      <div className="card">
        <p style={{ margin: 0, color: '#64748b' }}>Current Price</p>
        <h3 style={{ margin: '5px 0' }}>${stats.current}</h3>
      </div>
      <div className="card">
        <p style={{ margin: 0, color: '#64748b' }}>52W High</p>
        <h3 style={{ margin: '5px 0' }}>${stats.high}</h3>
      </div>
      <div className="card">
        <p style={{ margin: 0, color: '#64748b' }}>52W Low</p>
        <h3 style={{ margin: '5px 0' }}>${stats.low}</h3>
      </div>
      <div className="card">
        <p style={{ margin: 0, color: '#64748b' }}>Volume</p>
        <h3 style={{ margin: '5px 0' }}>{stats.volume}</h3>
      </div>
    </div>
  );
};

export default KPICards;