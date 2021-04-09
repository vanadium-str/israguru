import React, {useContext} from 'react';
import {IsraGuruContext} from "../../utils/Context";
import style from "../../css_modules/button.module.css";

const Button = ({id, guide}) => {
    const {changePage} = useContext(IsraGuruContext);
    return (
        <button className={`${style.btnBig}`} onClick={() => {
            changePage('fullInfo', guide, id)
            console.log(guide, id);
        }}>Подробнее
        </button>
    );
};

export default Button;