import React from 'react';

const TimeframeSelector = ({ onSelect }) => {
  const timeframes = ['1D', '5D', '1M', '6M', '1Y'];
  
  return (
    <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
      {timeframes.map((tf) => (
        <button 
          key={tf} 
          onClick={() => onSelect(tf)}
          style={{ background: '#1e293b', border: 'none', padding: '8px 15px', borderRadius: '6px', color: '#fff', cursor: 'pointer' }}
        >
          {tf}
        </button>
      ))}
    </div>
  );
};

export default TimeframeSelector;