import React from 'react';
import logo from "../images/logo.png";
import {homePage} from "../utils/constants";
import {Link} from "react-router-dom";

const Logo = () => {
    return (
        <Link className='linkLogo' to={`/${homePage}`}>
            <img className='logo' src={logo} alt='logo' width='100rem'/>
        </Link>
    );
};

export default Logo;