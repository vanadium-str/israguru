import React from 'react';
import {FaFacebookF, FaTwitter} from "react-icons/fa";
import style from "../../css_modules/footer.module.css";
import button from "../../css_modules/button.module.css";
import link from '../../css_modules/link.module.css';

const Footer = () => {
    return (
            <footer className="container-fluid">
                <div className="d-flex justify-content-around">

                    <div className={`${style.footerText} small mt-3 mb-4`}>
                        Subscribe to our newsletter to receive exclusive information about us and our services
                        <div className="input-group mt-1">
                            <input type="text" placeholder="Enter your e-mail"/>
                            <div className="input-group-append ml-2">
                                <button className={`${button.btnGo}`} type="submit">
                                    Go
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className='d-flex align-items-center'>
                        <a href='https://twitter.com/?lang=en'>
                            <FaTwitter className={`${link.linkBlack} footerIcon mr-3`}/>
                        </a>
                        <a href='https://www.facebook.com/'>
                            <FaFacebookF className={`${style.footerIcon}`}/>
                        </a>
                    </div>
                </div>
            </footer>
    );
};

export default Footer;