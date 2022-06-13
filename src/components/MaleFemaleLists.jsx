import TopNames from './TopNames';

import{ useState } from 'react';

function MaleFemaleLists(props) {

  const [seeAllGirls, setSeeAllGirls] = useState(false);
  const [seeAllBoys, setSeeAllBoys] = useState(false);

  const newArrGirls= [];
  const newArrBoys= [];

  const girls = props.names.filter((name) => name.gender === "F");
  girls.forEach((item, index) =>{
    item.pos = index + 1;
    newArrGirls.push(item)
    return newArrGirls;
  })


  const boys = props.names.filter((name) => name.gender === "M");
  boys.forEach((item, index) =>{
    item.pos = index + 1;
    newArrBoys.push(item)
    return newArrBoys;
  })

  const top10girls=girls.filter(name => name.pos <= 10);
  const top10boys=boys.filter(name => name.pos <= 10);
  const top100girls=girls.filter(name => name.pos <= 100);
  const top100boys=boys.filter(name => name.pos <= 100);

  return(
    <>
      <div className="Column">
        <h2>Top 100 Baby Boys Names in { props.params.year }</h2>
        <table>
          <tbody>
            <TopNames top10 ={ top10boys }  top100={ top100boys } gender = "m" seeall={ seeAllBoys } />
          </tbody>
        </table>
        <div className="text-center">
          <button onClick={()=> setSeeAllBoys(true)} className="fullwidth">View All</button>
        </div>
      </div>
      <div className="Column">
        <h2>Top 100 Baby Girls Names in { props.params.year }</h2>
        <table>
          <tbody>
            <TopNames top10 ={ top10girls } top100={ top100girls } gender = "f" seeall={ seeAllGirls }/>
          </tbody>
        </table>
        <div className="text-center">
          <button onClick={()=> setSeeAllGirls(true)} className="fullwidth">View All</button>
        </div>
      </div>
    </>
  )
}

export default MaleFemaleLists;