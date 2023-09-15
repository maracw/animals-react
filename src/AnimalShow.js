//import image files to use
import bird from './svg/bird.svg';
import cat from './svg/cat.svg';
import cow from './svg/cow.svg';
import dog from './svg/dog.svg';
import gator from './svg/gator.svg';
import horse from './svg/horse.svg';
import heart from './svg/heart.svg';
import { useState } from 'react';
import './AnimalShow.css';
//put animal images into an object
/*let svgMap = {
    bird : bird,
    cat : cat,
    cow : cow,
    dog : cow,
    gator : gator, 
    horse : horse
};*/

const svgMap = {
    bird,
    cat,
    cow,
    dog,
    gator, 
    horse
};
function AnimalShow({type}){
    //make state for clicks
    const [clicks, setClicks] = useState(0);
    //event handler
    const handleClick = () => {
        setClicks (clicks + 1);
    };

    return (
    <div onClick={handleClick} className="animal-show">
        <img alt={type} src={svgMap[type]} className="animal" />
        <img alt="heart" 
            src={heart}
            className="heart"
            style = {
                {width: 10 + 10*clicks +'px'}
            }
            />
        <div>{type}</div>
    </div>
    );
}

export default AnimalShow;