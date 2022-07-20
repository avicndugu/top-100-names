import PlaceHolder1To10 from '../../components/PlaceHolder1To10';
import AllBottomLinks from '../../components/AllBottomLinks';


function Favourites() {
  if (true){
    return (
      <>
        <h1>Your Favourite Baby Names</h1>
        <div className="Row">
          <div className="Column">
            <PlaceHolder1To10 />
          </div>
          <div className="Column">
            <PlaceHolder1To10 />
          </div>
        </div>
        <AllBottomLinks />
      </>
    )
  } else {
    return (
      <>
        <h1>Your Favourite Baby Names</h1>
        <div className="Row">
          <div className="Column">
            <PlaceHolder1To10 />
          </div>
          <div className="Column">
            <PlaceHolder1To10 />
          </div>
        </div>
        <AllBottomLinks />
      </>
    )
  }
}

export default Favourites;