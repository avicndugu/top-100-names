import AllBottomLinks from "../../components/AllBottomLinks";

function Favourites() {
  if (localStorage.key(0) !== "localfavourite") {
    return (
      <>
        <h1>Your Favourite Baby Names</h1>
        <div>
          <p>No favourite baby names</p>
          <p>You have not choosen any baby names.</p>
          <p>
            You selected the baby names will appear here once you click the
            heart button next to the name.
          </p>
        </div>
        <AllBottomLinks />
      </>
    );
  } else {
    const currentlocalfav = JSON.parse(localStorage.getItem("localfavourite"));
    console.log(currentlocalfav);
    if (currentlocalfav.length === 0) {
      return (
        <>
          <h1>Your Favourite Baby Names</h1>
          <div>
            <p>No favourite baby names</p>
            <p>You have not choosen any baby names.</p>
            <p>
              You selected the baby names will appear here once you click the
              heart button next to the name.
            </p>
          </div>
          <AllBottomLinks />
        </>
      );
    }
    return (
      <>
        <h1>Your Favourite Baby Names</h1>
        <div className="Row">
          <div className="Column">
            <table>
              <tbody>
                {currentlocalfav.map((name) => (
                  <tr key={name.id}>
                    <td>{name.name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="Column">
            <table>
              <tbody></tbody>
            </table>
          </div>
        </div>
        <AllBottomLinks />
      </>
    );
  }
}

export default Favourites;
