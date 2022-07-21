import PlaceHolder1To10 from '../../components/PlaceHolder1To10';
import AllBottomLinks from '../../components/AllBottomLinks';


function Favourites() {
  if (localStorage.key(0)!=='localfavourite'){
    return (
      <>
        <h1>Your Favourite Baby Names</h1>
        <div>
          <p>No favourite baby names</p>
          <p>You have not choosen any baby names.</p>
          <p>You selected the baby names will appear here once you click the heart button next to the name.</p>
        </div>
        <AllBottomLinks />
      </>
    )
  } else {
    const currentlocalfav = JSON.parse(localStorage.getItem('localfavourite'));
    console.log(currentlocalfav);
    if(currentlocalfav.length===0) {
      return (
        <>
        <h1>Your Favourite Baby Names</h1>
        <div>
          <p>No favourite baby names</p>
          <p>You have not choosen any baby names.</p>
          <p>You selected the baby names will appear here once you click the heart button next to the name.</p>
        </div>
        <AllBottomLinks />
        </>
      )
    }
    return (
      <>
        <h1>Your Favourite Baby Names</h1>
        <div className="Row">
          <div className="Column">
            {
              currentlocalfav.map((name)=>(
                <p>{ name.name }</p>
              ))
            }
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