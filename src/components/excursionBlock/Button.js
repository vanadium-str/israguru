import React, {useContext} from 'react';
import {IsraGuruContext} from "../../utils/Context";
import style from "../../css_modules/button.module.css";
import {Link} from "react-router-dom";
import {fullInfo} from "../../utils/constants";

const Button = ({id, guide}) => {
    const {changePage} = useContext(IsraGuruContext);
    return (
        <Link to={`/${fullInfo}`}>
        <button className={`${style.btnBig}`} onClick={() => {
            changePage(fullInfo, guide, id)
            console.log(guide, id);
        }}>Подробнее
        </button>
        </Link>
    );
};

export default Button;