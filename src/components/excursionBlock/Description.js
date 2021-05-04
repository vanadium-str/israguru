import React from 'react';
import {FaMapSigns} from "react-icons/fa";
import style from "../../css_modules/main.module.css";
import {bannerData} from "../../json/bannerData";

const Description = ({id}) => {
    return (
            <div>
                <h2 className={`font-weight-bold`}>{bannerData[id].title}</h2>
                <p className={`${style.description} font-italic`}> {bannerData[id].summary}</p>
                <hr/>
                <p><FaMapSigns/> Уровень сложности материала: {bannerData[id].level}</p>
            </div>
    );
};

export default Description;