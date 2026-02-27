import React, { useMemo } from 'react';
import { calculateAnalytics } from '../utils/analytics';

const AnalyticsPanel = ({ data }) => {
  const stats = useMemo(() => calculateAnalytics(data), [data]);

  if (!stats) return null;

  return (
    <div style={{ marginTop: '20px', padding: '15px', background: '#1e293b', borderRadius: '12px', display: 'flex', gap: '20px' }}>
      <div><small style={{color: '#94a3b8'}}>Avg Price</small> <h4 style={{margin: '5px 0'}}>${stats.avg}</h4></div>
      <div><small style={{color: '#94a3b8'}}>5-Period MA</small> <h4 style={{margin: '5px 0'}}>${stats.ma}</h4></div>
      <div><small style={{color: '#94a3b8'}}>Volatility</small> <h4 style={{margin: '5px 0'}}>{stats.volatility}</h4></div>
    </div>
  );
};

export default AnalyticsPanel;