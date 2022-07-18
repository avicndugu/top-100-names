import { useState } from 'react';

const friendsnames = [{id: 1,name: "Agnes", favourite: false},{id: 2,name: "ALice", favourite: false},{id: 3,name: "Alvaro", favourite: false},{id: 4,name: "Arabia", favourite: false}];


const ToggleFavourite = () => {
  const [names, setNames] = useState(friendsnames);

  // Function to set favourites
  const changeFavourite = (id) => {
    setNames(
      names.map((name) => {
          if(name.id == id){
            console.log(names)
            return { ...name, favourite: !name.favourite }
          } else {
            console.log(names)
            return{ ...name }
          }
      })
    )
  }
  console.log(names);
  return (
    <main>
      <DisplayFavourite names= {names} changeFavourite= {changeFavourite}/>
      <ul>
        {
          names.map((name) => (
            <li key={name.id}> {name.id} { name.name }
              <button onClick={()=>changeFavourite(name.id)}>
                Toggle Favourite
              </button>
            </li>
          ))
        }
      </ul>
    </main>
  )
}

const DisplayFavourite = (props) => {
  console.log(props);
  return (
    <ul>
      {  
        props.names.map((name) => (
          <li key={name.id}>{name.id} { name.name }
            <button onClick={()=> props.changeFavourite(name.id)}>
                Toggle Favourite
              </button>
          </li>
        ))
      }
    </ul>
  )
}


export default ToggleFavourite;