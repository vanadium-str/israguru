import React from 'react';
import logo from "../images/logo.png";
import link from "../css_modules/link.module.css";
import {homePage} from "../utils/constants";
import {Link} from "react-router-dom";

const Logo = () => {
    return (
        <Link className={`${link.linkBlack}`} to={`/${homePage}`}>
            <img className={`${link.logo}`} src={logo} alt='logo' width='250'/>
            </Link>
    );
}

export default Logo;