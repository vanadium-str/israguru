import React from 'react';
import style from "../../css_modules/main.module.css";
import other from "../../css_modules/other.module.css";

const Date = () => {
    return (
        <div className={`row ${other.top}`}>
            {/*{TODO => take DATE from JSON bannerData}*/}
            <p className={`${style.date} font-weight-bold font-italic d-flex align-items-center mr-1`}>03</p>
            <div>
                <p className={`mb-0 ${style.dash}`}>сентября</p>
                <p>воскресенье</p>
            </div>
        </div>
    );
};

export default Date;