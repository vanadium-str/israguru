import React, {useContext} from 'react';
import {IsraGuruContext} from "../../utils/сontext";
import button from "../../css_modules/button.module.css";
import {fullInfo} from "../../utils/constants";
import {Link} from "react-router-dom";

const ButtonMore = ({id}) => {
    return (
        <Link to={`/${fullInfo}/${id}`} className={`${button.btnBig}`}>
            Подробнее
        </Link>
    );
};

export default ButtonMore;