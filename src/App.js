import { useState } from "react";

//not part of App component, but App needs to find this

function getRandomAnimal () {
    const animals=['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];

    return animals[Math.floor(Math.random()*animals.length)];
}

function App (){

    const[animals, setAnimals] = useState([]);

    const handleClick = () =>{
        setAnimals([...animals, getRandomAnimal()]);
    };

    return (
        <div>
            <button onClick={handleClick}>Add animal</button>
            <div>Animals: {animals}</div>
        </div>
       
        );
    
}

export default App;