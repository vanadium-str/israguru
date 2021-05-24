import React, {useContext} from 'react';
import other from "../../css_modules/other.module.css";
import style from "../../css_modules/button.module.css";
import payment from "../../css_modules/payment.module.css";
import {IsraGuruContext} from "../../utils/сontext";
import {paymentSuccessful, signUpEvent} from "../../utils/constants";
import {Link} from "react-router-dom";
import {FaCcVisa,FaCcMastercard,FaCcDiscover} from "react-icons/fa";
import IconsFormPayment from "./IconsFormPayment";

const PaymentPage = (props) => {
    let keyExcursion = props.match.params.idExcursion;
    return (
        <div className={`${other.themeBack}`}>
            <div className={`${payment.row}`}>
            <div className='offset-3 col-7'>
                <form>
                <h2 className='col-2 font-weight-bold mt-5 mb-3 p-0'>
                    Оплата
                </h2>
                    <div className={`${payment.col50}`}>
                        <IconsFormPayment/>
                        <label className={`${payment.labelStyle}`}>Владелец карты:</label>
                        <input className={`${payment.inputStyle}`} type="text" placeholder="Фамилия Имя"/>
                        <label className={`${payment.labelStyle}`} >Номер карты:</label>
                        <input className={`${payment.inputStyle}`} type="text" placeholder="1111-2222-3333-4444"/>
                        <div className={`${payment.row}`}>
                            <div className={`${payment.col50}`}>
                                <label className={`${payment.labelStyle}`}>Год:</label>
                                <input className={`${payment.inputStyle}`} type="text" placeholder={new Date().getFullYear()}/>
                            </div>
                            <div className={`${payment.col50}`}>
                                <label className={`${payment.labelStyle}`} >Месяц:</label>
                                <input className={`${payment.inputStyle}`} type="text" placeholder={new Date().getMonth()}/>
                            </div>
                            <div className={`${payment.col50} ml-2`}>
                                <label className={`${payment.labelStyle}`} >CVV</label>
                                <input className={`${payment.inputStyle}`} type="text" placeholder="352"/>
                            </div>
                        </div>
                    </div>
                    <Link to={`/${paymentSuccessful}/${keyExcursion}`} className={`${style.btnBig} mr-5`}>
                        Продолжить
                    </Link>
                    <Link to={`/${signUpEvent}/${keyExcursion}`} className={`${style.btnWhite} text-center`}>
                        Отменить
                    </Link>
                </form>
            </div>
            </div>
        </div>
    );
};

export default PaymentPage;