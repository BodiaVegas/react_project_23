import React from 'react';
import './Simpsons.css';
const Simpson = function simpson(props) {
    let {name, description, picture} = props;
    return(
        <div>
            <h2 className={`target`}>{name}</h2>
            <p>{description}</p>
            <img src={picture} alt="Bart"/>
        </div>
    )
}

export default Simpson;

