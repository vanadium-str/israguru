import React from 'react';
import {FaFacebookF, FaTwitter} from "react-icons/fa";
import style from "../../css_modules/footer.module.css";
import button from "../../css_modules/button.module.css";

const Footer = () => {
    return (
        <footer className="container-fluid">
            <div className="row d-flex justify-content-around">
            <div className={`${style.footerText} mt-2 small`}>
                Subscribe to our newsletter to receive exclusive information about us and our services
                <div className="input-group mb-3 mt-1">
                    <input type="text" placeholder="Enter your Email"/>
                    <div className="input-group-append">
                        <button className={`${button.btnGo}`} type="submit">Go</button>
                    </div>
                </div>
            </div>
            <div className='d-flex align-items-center'>
                <FaTwitter/>
                <FaFacebookF/>
            </div>
            </div>
        </footer>
    );
};

export default Footer;