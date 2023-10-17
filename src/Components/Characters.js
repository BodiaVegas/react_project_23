import React, {useEffect, useState} from 'react';
import Character from "./Character.js";

const Characters = () => {
    const [characters, setter] = useState([]);
    useEffect(()=> {
        fetch('https://rickandmortyapi.com/api/character/[1,2,3,4,5,6,7]')
            .then(value=> value.json())
            .then(characters=>setter(characters))
        console.log(characters);
    })
    return (
        <div>
            {characters.map(human=> <Character key={human.id} item={human}/>)}
        </div>
    );
};

export default Characters;