import { useState } from 'react';

const ToggleFavourite = () => {
  return (
    <>
      <Board />
    </>

  )
}


function Board() {
  const [buttonsClicked, setButtonsClicked] = useState(Array(4).fill('Not Clicked'));
  const buttonClick = (clickEvent, index) => {
    const clicks = buttonsClicked.map((clickvalue, i) => {
      if (i === index){
        return "clicked";
      }else{
      return clickvalue;
      }

    });
    setButtonsClicked(clicks);
  }
  return (
    <>
      {
      buttonsClicked.map((click, i)=>(
        <button onClick={(clickEvent)=> buttonClick(clickEvent, i)}>Button {i}</button>
      ))}
    </>
  )
}

const Square = (props) => {
  return(
    <button className="square" onClick={()=> props.setClicked("Clicked")}>
      {props.value} and is {props.clicked}
    </button>
  )
}


export default ToggleFavourite;