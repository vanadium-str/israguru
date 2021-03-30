import React from 'react';
import {FaMapSigns} from "react-icons/fa";
import style from "../../css_modules/main.module.css";

const Description = props => {
    return (
            <div>
                <h1 className={`${style.theme} font-weight-bold`}>{props.title}</h1>
                <p className={`${style.description} font-italic`}> {props.summary}</p>
                <hr/>
                <p><FaMapSigns/> Уровень сложности материала: {props.level}</p>
            </div>
    );
};

export default Description;