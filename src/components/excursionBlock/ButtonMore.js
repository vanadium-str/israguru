import React from 'react';
import {Link} from "react-router-dom";
import button from "../../css_modules/button.module.css";
import {fullInfo} from "../../utils/constants";

const ButtonMore = ({id}) => {
    return (
        <Link to={`/${fullInfo}/${id}`} className={`${button.btnBig}`}>
            Подробнее
        </Link>
    );
};

export default ButtonMore;