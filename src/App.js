import { useState } from 'react';
import { motion } from 'framer-motion';
import { useStockData } from './hooks/useStockData';
import { useLocalStorage } from './hooks/useLocalStorage';
import { useComparison } from './hooks/useComparison';
import { SearchBar } from './components/SearchBar';
import ChartComponent from './components/ChartComponent';
import PortfolioWidget from './components/PortfolioWidget';
import KPICards from './components/KPICards';
import TimeframeSelector from './components/TimeframeSelector';
import PortfolioActions from './components/PortfolioActions';
import HoldingsTable from './components/HoldingsTable';
import AnalyticsPanel from './components/AnalyticsPanel';
import ComparisonEngine from './components/ComparisonEngine';
import { Toaster, toast } from 'react-hot-toast';
import './App.css';

function App() {
  const { data, loading, getStock, currentSymbol } = useStockData();
  const [watchlist, setWatchlist] = useLocalStorage('watchlist', []);
  const [selectedStocks, setSelectedStocks] = useState([]);
  const { comparisonData, compareStocks } = useComparison();

  const toggleStock = (s) => {
    if (selectedStocks.includes(s)) {
      setSelectedStocks(selectedStocks.filter(item => item !== s));
    } else if (selectedStocks.length < 2) {
      setSelectedStocks([...selectedStocks, s]);
    } else {
      toast.error("You can only compare 2 stocks at a time!");
    }
  };

  const handleDynamicCompare = () => {
    if (selectedStocks.length !== 2) {
      toast.error("Please select exactly 2 stocks!");
      return;
    }
    compareStocks(selectedStocks);
  };

  const addToWatchlist = () => {
    if (!currentSymbol) {
      toast.error("Search a stock first!");
      return;
    }
    if (watchlist.includes(currentSymbol)) {
      toast.error(`${currentSymbol} is already in watchlist`);
    } else {
      setWatchlist([...watchlist, currentSymbol]);
      toast.success(`${currentSymbol} added to watchlist!`);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.6 }}
      className="dashboard-container"
    >
      <Toaster position="top-right" />
      
      <aside className="sidebar">
        <h2>Dashboard</h2>
        <PortfolioWidget />
        <HoldingsTable /> 
        
        <div style={{ marginTop: '30px' }}>
          <h4>Watchlist</h4>
          {watchlist.map(s => (
            <div key={s} className="watchlist-button">
              <button onClick={() => getStock(s)} style={{ background: 'none', border: 'none', color: '#38bdf8', cursor: 'pointer' }}>
                ★ {s}
              </button>
              <button onClick={() => toggleStock(s)} style={{ background: selectedStocks.includes(s) ? '#38bdf8' : '#1e293b', border: 'none', padding: '4px 10px', borderRadius: '6px', color: '#fff', fontSize: '10px' }}>
                {selectedStocks.includes(s) ? '✓' : '+'}
              </button>
            </div>
          ))}
        </div>
      </aside>

      <main className="main-content">
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="card">
          <h1>Stock Analytics</h1>
          <SearchBar onSearch={(symbol) => getStock(symbol)} />
          
          {loading ? (
            <div className="skeleton" style={{ height: '400px', width: '100%', marginTop: '20px' }}></div>
          ) : data ? (
            <div className="card-grid">
              <div style={{ gridColumn: 'span 4' }}>
                <button onClick={addToWatchlist} style={{ background: '#10b981' }}>Add to Watchlist</button>
                <PortfolioActions symbol={currentSymbol} price={data[data.length - 1].price} />
              </div>
              
              <div style={{ gridColumn: 'span 4' }}>
                <TimeframeSelector onSelect={(tf) => getStock(currentSymbol, tf)} />
                <KPICards data={data} />
              </div>

              <div style={{ gridColumn: 'span 4' }}>
                <ChartComponent data={data} />
              </div>

              <div style={{ gridColumn: 'span 4' }}>
                <AnalyticsPanel data={data} />
              </div>
            </div>
          ) : null}

          <div style={{ marginTop: '30px' }}>
            <button onClick={handleDynamicCompare}>Compare Selected</button>
            <ComparisonEngine comparisonData={comparisonData} />
          </div>
        </motion.div>
      </main>
    </motion.div>
  );
}

export default App;