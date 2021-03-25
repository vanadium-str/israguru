import React from 'react';
import {FaMapSigns} from "react-icons/fa";

const Description = props => {
    return (
        <div className='ml-4'>
            <h1 className='theme font-weight-bold'>{props.title}</h1>
            <p className='description font-italic'> {props.summary}</p>
            <hr/>
            <p><FaMapSigns/> Уровень сложности материала: {props.level}</p>
        </div>
    );
};

export default Description;