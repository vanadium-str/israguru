import React from 'react';
import {IsraGuruContext} from "../../utils/Context";
import style from "../../css_modules/button.module.css";

const Button = ({guide, id}) => {
    return (
        <IsraGuruContext.Consumer>
            {
                value=>
                    <button className={`${style.btnBig}`} onClick={() => {
                        value.changePage('fullInfo', guide, id)
                    }}>Подробнее
                    </button>
            }
        </IsraGuruContext.Consumer>
    );
};

export default Button;