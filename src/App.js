import './App.css';
import logo from './logo.png';
import heartsolid from './icons/heart-solid.png';
import { Routes, Route} from 'react-router-dom';
import Home from './pages/home/Home';
import Year from './pages/year/Year';
import Gender from './pages/gender/Gender';
import Favourites from './pages/fav/Favourites';

function App() {
  const today = new Date();
  const year = today.getFullYear();


  return (
    <div className="Container">
      <header className="App-header">
        <a href="/"><img src={logo} alt="Top 100 Names" height="50" width="148.7"/></a>
        <a href="/favourites" style={{ display: 'flex', alignItems: 'center' }}>
          <div>
            <span style={{ display: 'inline-block', marginBottom: '6px'}}>Saved</span>
          </div>
          <div>
            <img style={{width: '30px', height: '30px', marginLeft: '10px'}} src={ heartsolid } alt={ "favourite names" } width="30" height="30" />
          </div>
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
          <span>Copyright © 2021 - {year} - </span> 
          <a href="https://avicndugu.github.io">Avic Ndugu</a>
          <span> - </span>
          <a href="https://www.ssa.gov/oact/babynames/">Data source (SSA)</a>
        </small>
      </footer>
    </div>
  );
}

export default App;
