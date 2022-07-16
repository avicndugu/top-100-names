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


const ToggleFavourite2 = () => {
    

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
