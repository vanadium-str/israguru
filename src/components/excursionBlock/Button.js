import React, {useContext} from 'react';
import {IsraGuruContext} from "../../utils/Context";
import style from "../../css_modules/button.module.css";
import {fullInfo} from "../../utils/constants";
import {Link} from "react-router-dom";

const Button = ({id, guide}) => {
    const {changePage} = useContext(IsraGuruContext);
    return (
        <Link to={`/${fullInfo}/${id}`}>
            <button className={`${style.btnBig}`}  onClick={() => {
                changePage(fullInfo, guide, id)
                console.log(guide, id);
            }}>Подробнее
            </button>
        </Link>
    );
};

export default Button;