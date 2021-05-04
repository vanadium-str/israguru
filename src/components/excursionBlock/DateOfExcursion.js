import React from 'react';
import style from "../../css_modules/main.module.css";
import other from "../../css_modules/other.module.css";
import {bannerData} from "../../json/bannerData";
import {getDayExcursion, getMonthExcursion} from "../../utils/constants";


const DateOfExcursion = ({id}) => {
    const d = new Date(bannerData[id].date);
    return (
        <div className={`row ${other.top}`}>
            <p className={`${style.date} font-weight-bold font-italic mr-2`}>
                {d.getDate()}
            </p>
            <div>
                <p className={`mb-0 ${style.dash}`}>
                    {getMonthExcursion(d)}
                </p>
                <p>
                    {getDayExcursion(d)}
                </p>
            </div>
        </div>
    );
};

export default DateOfExcursion;