import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import RandQuotes from './Components/QuoteGenerator';

function App() {
  return (
    <div className="App">
      <Header />
      <RandQuotes />
      <Footer />
    </div>
  );
}

export default App;
