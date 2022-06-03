import './App.css';
import logo from './logo.png';
import { Routes, Route} from 'react-router-dom';
import Home from './pages/home/Home';
import Year from './pages/year/Year';
import Gender from './pages/gender/Gender';

function App() {
  return (
    <div className="Container">
      <header className="App-header">
        <a href="/"><img src={logo} alt="Top 100 Names" height="50px"/></a>
      </header>
      <main>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path=":year" element= { <Year /> }/>
          <Route path=":year/:gender" element={ <Gender /> } />
          <Route path="*" element={ <p>Theres nothing here</p> } />
        </Routes>
        
      </main>
    </div>
  );
}

export default App;
