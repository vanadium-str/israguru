import React from 'react';
import {FaMapSigns} from "react-icons/fa";
import {excursionData} from "../../json/excursionData";
import style from "../../css_modules/main.module.css";

const Description = ({id}) => {
    return (
        <div>
            <h2 className={`font-weight-bold`}>
                {excursionData[id].title}
            </h2>
            <p className={`${style.description} font-italic`}>
                {excursionData[id].summary}
            </p>
            <hr/>
            <p>
                <FaMapSigns/> Уровень сложности материала: {excursionData[id].level}
            </p>
        </div>
    );
};

export default Description;