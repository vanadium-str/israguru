import React, {useContext} from 'react';
import {IsraGuruContext} from "../../utils/сontext";
import style from "../../css_modules/button.module.css";
import {fullInfo} from "../../utils/constants";
import {Link} from "react-router-dom";

const Button = ({id}) => {
    return (
        <Link to={`/${fullInfo}/${id}`} className={`${style.btnBig}`}>
            Подробнее
        </Link>
    );
};

export default Button;