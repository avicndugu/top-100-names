import './App.css';
import logo from './logo.png';
import { Routes, Route} from 'react-router-dom';
import Home from './pages/home/Home';
import Year from './pages/year/Year';
import Gender from './pages/gender/Gender';
import Favourites from './pages/fav/Favourites';


function App() {
  return (
    <div className="Container">
      <header className="App-header">
        <a href="/"><img src={logo} alt="Top 100 Names" height="50px"/></a>
        <a href="/favourites">Favourite Names</a>
      </header>
      <main>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path=":year" element= { <Year /> }/>
          <Route path=":year/:gender" element={ <Gender /> } />
          <Route path="/favourites" element={ <Favourites /> } />

          <Route path="*" element={ <p>Theres nothing here</p> } />
        </Routes>
        
      </main>
    </div>
  );
}

export default App;
