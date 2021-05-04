import React, {useContext} from 'react';
import {signUpEvent} from "../../utils/constants";
import style from "../../css_modules/button.module.css";
import {Link} from "react-router-dom";
import {IsraGuruContext} from "../../utils/сontext";

const ButtonAccept = ({id}) => {
    return (
        <Link to={`/${signUpEvent}/${id}`} className={`${style.btnBig}`}>Пойду
        </Link>
    );
};

export default ButtonAccept;