import React, {useContext} from 'react';
import {signUpEvent} from "../../utils/constants";
import style from "../../css_modules/button.module.css";
import {Link} from "react-router-dom";
import {IsraGuruContext} from "../../utils/Context";

const ButtonAccept = () => {
    const {changePage, idExcursion, idGuide} = useContext(IsraGuruContext);
    return (
        <Link className='col-2' to={`/${signUpEvent}`}>
            <button className={`${style.btnBig}`} onClick={() => {
                changePage(signUpEvent, idGuide, idExcursion)
            }}>Пойду
            </button>
        </Link>
    );
};

export default ButtonAccept;