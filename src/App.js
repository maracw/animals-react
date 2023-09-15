import { useState } from "react";
import AnimalShow from "./AnimalShow";

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

    const renderedAnimals = animals.map((animal,index) =>{
        return <AnimalShow type={animal} key = {index}/>;
    });

    return (
        <div>
            <button onClick={handleClick}>Add animal</button>
            <div>{renderedAnimals}</div>
        </div>
       
        );
    
}

export default App;