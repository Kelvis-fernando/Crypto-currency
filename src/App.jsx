import NewsFeed from './components/NewsFeed';
import CurrencyConverter from './components/CurrencyConverter';

const App = () => {
  return (
    <div className="app bg-zinc-600 text-white">
      <CurrencyConverter />
      <NewsFeed />
    </div>
  );
};

export default App;
