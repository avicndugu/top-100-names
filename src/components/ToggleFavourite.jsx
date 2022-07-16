import { useState } from 'react';

const friendsnames = [{id: 1,name: "Agnes", favourite: "false"},{id: 2,name: "ALice", favourite: "false"},{id: 3,name: "Alvaro", favourite: "false"},{id: 4,name: "Arabia", favourite: "false"}];

const ToggleFavourite = () => {
  const [names, setNames] = useState(friendsnames);
  
  // Function to set favourites
  const changeFavourite = (id) => {
    setNames(
      names.map((name) => {
          if(name.id == id){
              return { ...name, favourite: "true" }
          } else {
              return{ ...name }
          }
      })
    )
    
  }

}


export default ToggleFavourite;