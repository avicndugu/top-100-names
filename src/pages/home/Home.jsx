import TopNames from '../../components/TopNames';
import SplitTable from '../../components/SplitTable';
import AllBottomLinks from '../../components/AllBottomLinks';
import useFetch from '../../functions/useFetch';
import { useState } from "react";

function Home() {
  const [isDataLoading, data] = useFetch('https://avicndugu.github.io/top-100-names/yob2021.json');
  const [seeAllGirls, setSeeAllGirls] = useState(false);
  const [seeAllBoys, setSeeAllBoys] = useState(false);

  if (isDataLoading || !data){
    return (
      <>
        <div>
          <h1>Top 100 Baby Names in 2021</h1>
          <div className="Row">
            <div className="Column">
              <p>Data is loading...</p>
            </div>
            <div className="Column">
              <p>Data is loading...</p>
            </div>
          </div>
        </div>
        <div className="Row">
          <div className="Column">
            <h2>Top 100 Baby Boys Names in 2021</h2>
            <p>Data is loading...</p>           
            <a href="/years/gender/">View All</a>
          </div>
          <div className="Column">
            <h2>Top 100 Baby Girls Names in 2021</h2>
            <p>Data is loading...</p>
            <a href="/year/gender/">View All</a>
          </div>
        </div>
        <AllBottomLinks />
      </>
    )
  } else {
    const newArrGirls= [];
    const newArrBoys= [];

    const girls = data.filter((name) => name.gender === "F");
    girls.forEach((item, index) =>{
      item.pos = index + 1;
      newArrGirls.push(item)
      return newArrGirls;
    })

    const boys = data.filter((name) => name.gender === "M");
    boys.forEach((item, index) =>{
      item.pos = index + 1;
      newArrBoys.push(item)
      return newArrBoys;
    })

    const top10girls=girls.filter(name => name.pos <= 10);
    const top10boys=boys.filter(name => name.pos <= 10);
    const top100girls=girls.filter(name => name.pos <= 100);
    const top100boys=boys.filter(name => name.pos <= 100);

    return (
      <>
        <div>
          <h1>Top 100 Baby Names in 2021</h1>
          <SplitTable names= { data }/>
        </div>
        <div className="Row">
          <div className="Column">
            <h2>Top 100 Baby Boys Names in 2021</h2>
            <table>
              <tbody>
                <TopNames names = { boys } top10 ={ top10boys } top100={ top100boys } gender = "m" seeall={ seeAllBoys } />
              </tbody>
            </table>
            <div className="text-center">
              <button onClick={()=> setSeeAllBoys(true)}>View All</button>
            </div>
          </div>
          <div className="Column">
            <h2>Top 100 Baby Girls Names in 2021</h2>
            <table>
              <tbody>
                <TopNames names = { girls }  top10 ={ top10girls } top100={ top100girls } gender = "f" seeall={ seeAllGirls } />
              </tbody>
            </table>
            <div className="text-center">
              <button onClick={()=> setSeeAllGirls(true)}>View All</button>
            </div>
          </div>
        </div>
        <AllBottomLinks />
      </>
    );

  }
}


export default Home;