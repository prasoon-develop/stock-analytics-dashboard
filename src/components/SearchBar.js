import React, { useState } from 'react';

export const SearchBar = ({ onSearch }) => {
  const [symbol, setSymbol] = useState('');

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') onSearch(symbol.toUpperCase());
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <input 
        placeholder="e.g. TSLA, AAPL"
        value={symbol} 
        onChange={(e) => setSymbol(e.target.value)}
        onKeyDown={handleKeyDown} // Pro feature
        style={{ padding: '12px', borderRadius: '8px', border: '1px solid #334155', background: '#0f172a', color: '#fff' }}
      />
      <button onClick={() => onSearch(symbol.toUpperCase())} style={{ marginLeft: '10px' }}>
        Analyze
      </button>
    </div>
  );
};