function ViewAllButton(props) {
  if(props.viewAllButton){
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