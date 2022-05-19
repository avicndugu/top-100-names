import './App.css';
import { Home } from './pages/home/Home';
import { Year } from './pages/year/Year';
import { Gender } from './pages/gender/Gender';

function App() {
  return (
    <div className="Container">
      <header className="App-header">
        <span>Top 100 Names</span>
      </header>
      <main>
        <div>
          <h1>Top 100 Baby Names in 2021</h1>
          <div className="Row">
            <div className="Column">
              <table>
                <tr><td>1. NAME</td></tr>
                <tr><td>2. NAME</td></tr>
                <tr><td>3. NAME</td></tr>
                <tr><td>4. NAME</td></tr>
                <tr><td>5. NAME</td></tr>
              </table>
              <a href="#">View All</a>
            </div>
            <div className="Column">
              <table>
                <tr><td>1. NAME</td></tr>
                <tr><td>2. NAME</td></tr>
                <tr><td>3. NAME</td></tr>
                <tr><td>4. NAME</td></tr>
                <tr><td>5. NAME</td></tr>
              </table>
              <a href="/year/gender/">View All</a>
            </div>
          </div>
        </div>
        <div className="Row">
          <div className="Column">
            <h2>Top 100 Baby Boys Names in 2021</h2>
            <table>
              <tr><td>1. NAME</td></tr>
              <tr><td>2. NAME</td></tr>
              <tr><td>3. NAME</td></tr>
              <tr><td>4. NAME</td></tr>
              <tr><td>5. NAME</td></tr>
            </table>
              <a href="/years/gender/">View All</a>
          </div>
          <div className="Column">
            <h2>Top 100 Baby Girls Names in 2021</h2>
            <table>
              <tr><td>1. NAME</td></tr>
              <tr><td>2. NAME</td></tr>
              <tr><td>3. NAME</td></tr>
              <tr><td>4. NAME</td></tr>
              <tr><td>5. NAME</td></tr>
            </table>
              <a href="/year/gender/">View All</a>
          </div>
        </div>
        <div>
          <h2>Top 100 Baby Names By Year</h2>
          <ul>
            <li><a href="/year/">NAME</a></li>
            <li><a href="/year/">NAME</a></li>
            <li><a href="/year/">NAME</a></li>
            <li><a href="/year/">NAME</a></li>
            <li><a href="/year/">NAME</a></li>
          </ul>
        </div>
        <div>
          <h2>Top 100 Girls Names By Year</h2>
          <ul>
            <li><a href="/year/">NAME</a></li>
            <li><a href="/year/">NAME</a></li>
            <li><a href="/year/">NAME</a></li>
            <li><a href="/year/">NAME</a></li>
            <li><a href="/year/">NAME</a></li>
          </ul>
        </div>
        <div>
          <h2>Top 100 Boys Names By Year</h2>
          <ul>
            <li><a href="/year/">NAME</a></li>
            <li><a href="/year/">NAME</a></li>
            <li><a href="/year/">NAME</a></li>
            <li><a href="/year/">NAME</a></li>
            <li><a href="/year/">NAME</a></li>
          </ul>
        </div>
      </main>
    </div>
  );
}

export default App;
