import { useState } from "react";

// You have an array one of the arrays value will be mutable.
const friendsArray = [
    {
        id: 1,
        name: "John",
        age: 19,
    },
    {
        id: 2,
        name: "Candy",
        age: 18,
    },
    {
        id: 3,
        name: "mandy",
        age: 20,
    },
];

const friendsnames = [{id: 1,name: "Agnes", favourite: false},{id: 2,name: "ALice", favourite: false},{id: 3,name: "Alvaro", favourite: false},{id: 4,name: "Arabia", favourite: false}];


const ToggleFavourite2 = () => {

  const [names, setNames] = useState(friendsnames);

  // Function to set favourites
  const changeFavourite = (id) => {
    setNames(
        names.map((name) => {
            if(name.id == id){

                return { ...name, favourite: !name.favourite }
            } else {
                return{ ...name }
            }
        })
    )
            console.log(names)

  }


    const [friends, setFriends] = useState(friendsArray); // Setting default value
    // function to add new friend
    const handleAddFriend = () => {
        setFriends((prevFriends) => [
            ...prevFriends,
            {
                name: "Random Friend Name",
                age: 20, // Random age
            },
        ]);
    };
    // Function to edit values of one friend
    const handleSecondFriend = (change) => {
        setFriends(
            friends.map((friend) =>{
                // Here you accept a id argument to the function and replace it with hard coded 🤪 2, to make it dynamic.
                if(friend.id === change){
                    return { ...friend, name: "Changed Name" }
                } else {
                    return { ...friend }
                }
            })
        );
    };



    return (
        <main>
            <ul>
                {
                    names.map((name) => (
                        <li key={name.id}> {name.id} { name.name }
                            <button onClick={()=>changeFavourite(name.id)}>
                                Toggle Favourite {name.favourite}
                            </button>
                        </li>
                    ))
                }
            </ul>
            <ul>
                {/* Mapping over array of friends */} 
                {friends.map((friend, index) => (
                    // Setting "index" as key because name and age can be repeated, It will be better if you assign uniqe id as key
                    <li key={index}>
                        <span>name: {friend.name}</span>{" "}
                        <span>age: {friend.age}</span>
                        <button onClick={()=>handleSecondFriend(friend.id)}>Change Second Name</button>
                    </li>
                ))}
                <button onClick={handleAddFriend}>Add Friends</button>

                <button onClick={()=>handleSecondFriend(2)}>Change Second Name</button>

            </ul>
        </main>
    );
};

export default ToggleFavourite2;
