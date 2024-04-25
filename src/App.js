import './App.css';
import logo from './logo.png';
import heartsolid from './icons/heart-solid.png';
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
        <a href="/favourites" style={{ display: 'flex', alignItems: 'center' }}>
          <span>Saved</span>
            <img style={{width: '30px', height: '30px', marginLeft: '10px'}} src={ heartsolid } alt={ "favourite names" } />
        </a>
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
      <footer style={{ textAlign: 'center', paddingTop: '80px', paddingBottom: '30px' }} >
        <small>
          <span>Copyright © 2021 - 2023 </span>
          <a href="https://avicndugu.github.io">Avic Ndugu</a>
          <span> - </span>
          <a href="https://www.ssa.gov/oact/babynames/">Data source</a>
        </small>
      </footer>
    </div>
  );
}

export default App;
