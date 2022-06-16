function ViewAllButton(props) {
console.log(props.viewButton);
  if(props.viewButton){
    return (
      <div className="text-center">
        <button onClick={
          ()=> {
            props.setSeeAll(true);
            props.setViewAllButton(false);
          }
        } className="fullwidth">View All</button>
      </div>
    )
  }
}

export default ViewAllButton;