import React from 'react';
import style from "../../css_modules/main.module.css";
import {excursionData} from "../../json/excursionData";
import {getDayExcursion, getMonthExcursion} from "../../utils/constants";

const DateOfExcursion = ({id}) => {
    const date = new Date(excursionData[id].date);

    return (
        <div className='row'>
            <p className={`${style.date} font-weight-bold font-italic mr-2`}>
                {date.getDate()}
            </p>
            <div>
                <p className={`mb-0 ${style.dash}`}>
                    {getMonthExcursion(date)}
                </p>
                <p>
                    {getDayExcursion(date)}
                </p>
            </div>
        </div>
    );
};

export default DateOfExcursion;