import { useState } from 'react';

const ToggleFavourite = () => {
  return (
    <>
      <Board />
    </>

  )
}


function Board() {
  return (
    <>
      <Square value={1} />
      <Square value={2} />
      <Square value={3} />
      <Square value={4} />
      <Square value={5} />
    </>
  )
}

const Square = (props) => {
 const [clicked, setClicked] = useState("not clicked");
  return(
    <button className="square" onClick={()=> setClicked("Clicked")}>
      {props.value} and is {clicked}
    </button>
  )
}




export default ToggleFavourite;