import React from 'react';
import {Link} from "react-router-dom";
import link from "../css_modules/link.module.css";
import {homePage} from "../utils/constants";

const Logo = () => {
    return (
        <Link className={`${link.linkBlack}`} to={`/${homePage}`}>
            <div className={`${link.logo} ${link.logoMargin}`}/>
            </Link>
    );
}

export default Logo;