import HalfTop from './HalfTop';
import ViewAllButton from './ViewAllButton';
import{ useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function SplitTable(props) {
  const [seeAll, setSeeAll] = useState(false);
  const [viewAllButton, setViewAllButton] = useState(true); 
  const favourites = new Array(100).fill(false);
 
  const namesList = props.names.map((item, index) => (
    {
      id: item.id,
      pos: item.id.substring(6),
      name: item.name,
      count: item.count,
      gender: item.gender,
      favourite: favourites[index]
    }
  ));

  // Check if local storage data exist
  if(localStorage.key(0)==='localfavourite' ) {
    const currentlocalfav = JSON.parse(localStorage.getItem('localfavourite'));
    // Update state for names on the local database 
    namesList.map(name => {
      currentlocalfav.filter((localname) => {
        if(name.id === localname.id) {
          name.favourite = true;
          return { ...name };
        } else {
          return { ...name };
        }
      })
      return name
    })

  } else {
    localStorage.setItem('localfavourite', JSON.stringify([]));
  }


// Altering Favourite State
  const first50 = namesList.filter(name => name.pos <= 50);
  const second50 = namesList.filter(name => name.pos > 50 && name.pos <=100);
  const first25 = namesList.filter(name => name.pos <= 25);
  const second25 = namesList.filter(name => name.pos>25 && name.pos <= 50);

  // setting seeAll false if visiting after clicking one of bottom links
  const location = useLocation();

  function UpdateViewAllState (resetstate){
    useEffect(() => {
      setSeeAll(location.state.resetviewall);
      setSeeAll(location.state.resetviewall);
      setViewAllButton(true);
    },[resetstate]);
  }

  if (location.state !== null){
    UpdateViewAllState(location.state);
  }

  const [localFav, setLocalFav] = useState(new Array(0));

  // Function to set favourites
  const changeFavourite = (id) => {
    // Change the favourite value of liked name
    const selectedname = namesList.filter(name => name.id === id);
    
    function changeLocalStorage(){
      const localdata = [];
      if(localStorage.key(0)==='localfavourite' ) {
        // Update localstorage object
        const currentlocalfavourite = JSON.parse(localStorage.getItem('localfavourite'));
        // Check if name exist in favourite list
        const index = currentlocalfavourite.map(item => item.id).indexOf(id);
        if (index>=0){
          // if item is in local storage, set value of the favourite item to false
          selectedname.map((name) => name.favourite= false )
          // Remove item existing on favourite list
          console.log(currentlocalfavourite)
          currentlocalfavourite.splice(index,1);
          console.log(currentlocalfavourite)
          localStorage.setItem('localfavourite', JSON.stringify(currentlocalfavourite));
          return(currentlocalfavourite);
        } else {
          // if item is not in local storage, set value of the favourite item to true
          selectedname.map((name) => name.favourite= true )
          // Add new item on favourite list
          currentlocalfavourite.push(selectedname[0]);
          localStorage.setItem('localfavourite', JSON.stringify(currentlocalfavourite));
          return(currentlocalfavourite);
        }
      } else {
        // if local storage is empty, set the value of first favourite item to true
        selectedname.map((name) => name.favourite= true )
        // Create localstorage object for the first time
        localdata.push(selectedname[0])
        localStorage.setItem('localfavourite', JSON.stringify([...localFav, selectedname[0]]));
          return(localdata);
        // return [...localFav, selectedname[0]]
      }
    }

    setLocalFav(
      changeLocalStorage()
    )
  }

  return(
    <>
      <div className="Row">
        <div className="Column">
          <table>
            <tbody>
              <HalfTop firstQuarter = { first25 } firstHalf = { first50 }  gender = "all" even={false} seeall={seeAll} changeFavourite= {changeFavourite}/>
            </tbody>
          </table>
        </div>
        <div className="Column">
          <table>
            <tbody>
              <HalfTop secondQuarter = { second25 } secondHalf= { second50 } gender = "all" even={true} seeall={seeAll}  changeFavourite= {changeFavourite}/>
            </tbody>
          </table>
        </div>
      </div>
      <div className="Column">
        <ViewAllButton setSeeAll={ setSeeAll } viewAllButton={ viewAllButton } setViewAllButton={ setViewAllButton }/>
      </div>
    </>
  )
}

export default SplitTable;