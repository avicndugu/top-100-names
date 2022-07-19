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
      pos: index + 1,
      name: item.name,
      count: item.count,
      gender: item.gender,
      favourite: favourites[index]
    }
  ));

// Altering Favourite State
  const [names, setNames] = useState(namesList);

  const first50 = names.filter(name => name.pos <= 50);
  const second50 = names.filter(name => name.pos > 50 && name.pos <=100);
  const first25 = names.filter(name => name.pos <= 25);
  const second25 = names.filter(name => name.pos>25 && name.pos <= 50);

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

  // Function to set favourites
  const changeFavourite = (id) => {
    
    setNames(
      names.map((name) => {
        if(name.pos === id){
          return { ...name, favourite: !name.favourite }
        } else {
          return{ ...name }
        }
      })
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