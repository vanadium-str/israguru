import React from 'react';
import {IsraGuruContext} from "../utils/Context";
import style from "../../css_modules/button.module.css";

const Button = (props) => {
    return (
        <IsraGuruContext.Consumer>
            {
                value=>
                    <button className={`${style.btnBig}`} onClick={() => {
                        value.changePage('fullInfo', props.guide)
                    }}>Подробнее
                    </button>
            }
        </IsraGuruContext.Consumer>
    );
};

export default Button;