import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home/Home';
import Year from './pages/year/Year';
import Gender from './pages/gender/Gender';

function App() {
  return (
    <div className="Container">
      <header className="App-header">
        <span>Top 100 Names</span>
      </header>
      <main>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="year" element= { <Year /> }/>
        </Routes>
        
      </main>
    </div>
  );
}

export default App;
