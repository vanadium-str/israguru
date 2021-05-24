import React from 'react';
import payment from "../../css_modules/payment.module.css";
import {FaCcDiscover, FaCcMastercard, FaCcVisa} from "react-icons/fa";

const IconsFormPayment = () => {
    return (
        <div className={`${payment.row}`}>
            <div className={`${payment.svg}`}>
                <FaCcVisa/>
            </div>
            <div className={`${payment.svg} ml-2`}>
                <FaCcMastercard/>
            </div>
            <div className={`${payment.svg} ml-2`}>
                <FaCcDiscover/>
            </div>
        </div>
    );
};

export default IconsFormPayment;