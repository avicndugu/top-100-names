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
  const myArray = [{name: "Agnes"},{name: "ALice"},{name: "Alvaro"},{name: "Arabia"}];
//  const myNewArray = myArray.map(addStateToArray);

  const [newButton, setNewButton] = useState(Array(4).fill('Unclicked'));
 
  const changeButtonState = (buttonIndex)=> { 
    const addAllButtonStatesToArray = myArray.map((item, index, array)=> {
      array[index].newButton = newButton[index];
      if(buttonIndex === index){
        array[index].newButton= "Clicked";
        return item;
      } else {
        return item;
      }
    });

//    setNewButton(addAllButtonStatesToArray);
    console.log(addAllButtonStatesToArray);
  }
// changeButtonState(0)
 changeButtonState(1)


//  function addStateToArray(item, index, array) {
//    console.log(newButton)
    //array[index].buttonsClicked = buttonsClicked[index];
//    return array;
//  };


//  console.log(myNewArray);
//  console.log(myArray);

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

//  console.log(buttonsClicked);
  return (
    <>
      {
        newButton.map( (item, index) =>(
          <button onClick={()=>changeButtonState(index)}>LALA</button>
        ))
      }
      {
        buttonsClicked.map((click, i)=>(
          <button onClick={(clickEvent)=> buttonClick(clickEvent, i)}>Button {i} {click}</button>
        ))
      }
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