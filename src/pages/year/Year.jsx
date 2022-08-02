import{ useState } from 'react';
import { useParams } from 'react-router-dom';
import SplitTable from '../../components/SplitTable';
import MaleFemaleLists from '../../components/MaleFemaleLists';
import AllBottomLinks from '../../components/AllBottomLinks';
import PlaceHolder1To10 from '../../components/PlaceHolder1To10';
import useFetch from '../../functions/useFetch';
import createlocalstore from '../../functions/createlocalstore';
import changelocalstore from '../../functions/changelocalstore';


function Year() {
  let params = useParams();
  const [isDataLoading, data] = useFetch(`https://jekyll-json-api.netlify.app/yob${params.year}.json`);

  // const [seeAll, setSeeAll] = useState(false);
  // const [viewAllButton, setViewAllButton] = useState(true); 
  const [localFav, setLocalFav] = useState(new Array(0));

  // // setting seeAll false if visiting after clicking one of bottom links
  // const location = useLocation();

  // function UpdateViewAllState (resetstate){
  //   useEffect(() => {
  //     setSeeAll(location.state.resetviewall);
  //     setSeeAll(location.state.resetviewall);
  //     setViewAllButton(true);
  //   },[resetstate]);
  // }

  // if (location.state !== null){
  //   UpdateViewAllState(location.state);
  // }


  if (isDataLoading || !data){
    return (
      <>
        <div>
          <h1>Top 100 Baby Names in { params.year }</h1>
          <div className="Row">
            <div className="Column">
              <PlaceHolder1To10 />
              <PlaceHolder1To10 />
            </div>
            <div className="Column">
              <PlaceHolder1To10 />
              <PlaceHolder1To10 />
            </div>
          </div>
          <AllBottomLinks />
        </div>
      </>
    )
  } else{

    const namesList = data.map((item, index) => (
      {
        id: item.id,
        pos: index + 1,
        name: item.name,
        count: item.count,
        gender: item.gender,
        favourite: item.favourite
      }
    ));

    // // Altering Favourite State
    // const first50 = namesList.filter(name => name.pos <= 50);
    // const second50 = namesList.filter(name => name.pos > 50 && name.pos <=100);
    // const first25 = namesList.filter(name => name.pos <= 25);
    // const second25 = namesList.filter(name => name.pos>25 && name.pos <= 50);

    
    // Create an empty store if it does not exist else indicate the current user's favourite names
    createlocalstore(namesList);


    // Function to set favourites
    const changeFavourite = (id) => {
      // Change the favourite value of liked name
      const selectedname = namesList.filter(name => name.id === id);
      setLocalFav(
        changelocalstore(localFav, id, selectedname)
      )
    }

    return (
      <>
        <div>
          <h1>Top 100 Baby Names in { params.year }</h1>
          <SplitTable names={ namesList } changeFavourite= {changeFavourite} />
        </div>
        <div className="Row">
          <MaleFemaleLists names={ namesList } params={ params } changeFavourite= {changeFavourite} />
        </div>
        <AllBottomLinks />
      </>
    );
  }
}

export default Year;