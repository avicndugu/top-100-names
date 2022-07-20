import PlaceHolder1To10 from '../../components/PlaceHolder1To10';
import AllBottomLinks from '../../components/AllBottomLinks';


function Favourites() {
  if (localStorage.key(0)!=='localfavourite'){
    return (
      <>
        <h1>Your Favourite Baby Names</h1>
        <div className="Row">
          <p>No favourite baby names</p>
          <br/>
          <p>You have not choosen any baby names.</p>

          <p>Once you like the baby names, they will appear here.</p>
        </div>
        <AllBottomLinks />
      </>
    )
  } else {
    const currentlocalfav = JSON.parse(localStorage.getItem('localfavourite'));
    console.log(currentlocalfav);
    return (
      <>
        <h1>Your Favourite Baby Names data present</h1>
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