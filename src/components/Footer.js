import React from 'react';
import {FaFacebookF, FaTwitter} from "react-icons/fa";


const Footer = () => {
    return (
        <footer className="container-fluid">
            <div className="row d-flex justify-content-around">
            <div className='footerText mt-2 small'>
                Subscribe to our newsletter to receive exclusive information about us and our services
                <div className="input-group mb-3 mt-1">
                    <input type="text" placeholder="Enter your Email"/>
                    <div className="input-group-append">
                        <button className='btnGo' type="submit">Go</button>
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