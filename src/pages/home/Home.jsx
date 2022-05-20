import YearLinks from '../../components/YearLinks';
import TopNames from '../../components/TopNames';


function Home() {
  return (
    <>
      <div>
        <h1>Top 100 Baby Names in 2021</h1>
        <div className="Row">
          <div className="Column">
            <TopNames />
          </div>
          <div className="Column">
            <TopNames />
            <a href="/year/gender/">View All</a>
          </div>
        </div>
      </div>
      <div className="Row">
        <div className="Column">
          <h2>Top 100 Baby Boys Names in 2021</h2>
          <TopNames />            
            <a href="/years/gender/">View All</a>
        </div>
        <div className="Column">
          <h2>Top 100 Baby Girls Names in 2021</h2>
          <TopNames />
          <a href="/year/gender/">View All</a>
        </div>
      </div>
      <div>
        <h2>Top 100 Baby Names By Year</h2>
        <YearLinks />
      </div>
      <div>
        <h2>Top 100 Girls Names By Year</h2>
        <YearLinks />
      </div>
      <div>
        <h2>Top 100 Boys Names By Year</h2>
        <YearLinks />
      </div>
    </>
  );
}

export default Home;