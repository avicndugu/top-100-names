function ViewAllButton(props) {
console.log(props.viewGirlsButton);
  if(props.viewGirlsButton){
    return (
      <div className="text-center">
        <button onClick={
          ()=> {
            props.setSeeAllGirls(true);
            props.setViewGirlsButton(false);
          }
        } className="fullwidth">View All</button>
      </div>
    )
  }
}

export default ViewAllButton;