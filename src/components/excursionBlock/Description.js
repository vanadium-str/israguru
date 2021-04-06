import React from 'react';
import {FaMapSigns} from "react-icons/fa";
import style from "../../css_modules/main.module.css";
import {bannerData} from "../../json/bannerData";

const Description = ({id}) => {
    return (
            <div>
                <h1 className={`${style.theme} font-weight-bold`}>{bannerData[id].title}</h1>
                <p className={`${style.description} font-italic`}> {bannerData[id].summary}</p>
                <hr/>
                <p><FaMapSigns/> Уровень сложности материала: {bannerData[id].level}</p>
            </div>
    );
};

export default Description;