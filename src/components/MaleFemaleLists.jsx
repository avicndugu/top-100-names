import TopNames from './TopNames';
import ViewAllButton from './ViewAllButton';
import{ useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// import createlocalstore from '../functions/createlocalstore';
// import  changelocalstore from '../functions/changelocalstore';


function MaleFemaleLists(props) {
  const [seeAllGirls, setSeeAllGirls] = useState(false);
  const [seeAllBoys, setSeeAllBoys] = useState(false);
  const [viewAllGirlsButton, setViewAllGirlsButton] = useState(true); 
  const [viewAllBoysButton, setViewAllBoysButton] = useState(true); 

  
  const namesList = props.names.map((item, index) => (
    {
      id: item.id,
      name: item.name,
      count: item.count,
      gender: item.gender,
      favourite: item.favourite
    }
  ));

  // Create an empty store if it does not exist else indicate the current user's favourite names
  // createlocalstore(namesList);

  const newArrGirls= [];
  const newArrBoys= [];

  const girls = namesList.filter((name) => name.gender === "F");
  girls.forEach((item, index) =>{
    item.pos = index + 1;
    newArrGirls.push(item)
    return newArrGirls;
  })


  const boys = namesList.filter((name) => name.gender === "M");
  boys.forEach((item, index) =>{
    item.pos = index + 1;
    newArrBoys.push(item)
    return newArrBoys;
  })

  const top10girls=girls.filter(name => name.pos <= 10);
  const top10boys=boys.filter(name => name.pos <= 10);
  const top100girls=girls.filter(name => name.pos <= 100);
  const top100boys=boys.filter(name => name.pos <= 100);


// setting seeAllGirls and seeAllBoys false if visiting after clicking one of bottom links
  const location = useLocation();

  function UpdateViewAllState (resetstate){
    useEffect(() => {
      setSeeAllGirls(location.state.resetviewall);
      setSeeAllBoys(location.state.resetviewall);
      setViewAllGirlsButton(true);
      setViewAllBoysButton(true);
    },[resetstate]);
  }

  if (location.state !== null){
    UpdateViewAllState(location.state);
  }



  // const [localFav, setLocalFav] = useState(new Array(0));

  // // Function to set favourites
  // const changeFavourite = (id) => {
  //   // Change the favourite value of liked name
  //   const selectedname = namesList.filter(name => name.id === id);
  //   setLocalFav(
  //     changelocalstore(localFav, id, selectedname)
  //   )
  // }


  return(
    <>
      <div className="Column">
        <h2>Top 100 Baby Boys Names in { props.params.year }</h2>
        <table>
          <tbody>
            <TopNames top10 ={ top10boys }  top100={ top100boys } gender = "m" seeall={ seeAllBoys } changeFavourite= { props.changeFavourite } />
          </tbody>
        </table>
        <ViewAllButton setSeeAll={ setSeeAllBoys } viewAllButton={ viewAllBoysButton } setViewAllButton={ setViewAllBoysButton } />
      </div>
      <div className="Column">
        <h2>Top 100 Baby Girls Names in { props.params.year }</h2>
        <table>
          <tbody>
            <TopNames top10 ={ top10girls } top100={ top100girls } gender = "f" seeall={ seeAllGirls } changeFavourite= { props.changeFavourite } />
          </tbody>
        </table>
        <ViewAllButton setSeeAll={ setSeeAllGirls } viewAllButton={ viewAllGirlsButton } setViewAllButton={ setViewAllGirlsButton } />
      </div>
    </>
  )
}

export default MaleFemaleLists;