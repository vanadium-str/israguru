import React from 'react';
import {Link} from "react-router-dom";
import IconsFormPayment from "./IconsFormPayment";
import {paymentSuccessful, signUpEvent} from "../../utils/constants";
import other from "../../css_modules/other.module.css";
import style from "../../css_modules/button.module.css";
import payment from "../../css_modules/payment.module.css";

const PaymentPage = (props) => {
    let keyExcursion = props.match.params.idExcursion;

    return (
        <div className={`${other.themeBack}`}>
            <div className={`${payment.row}`}>
                <div className={`offset-xl-3 offset-lg-4 offset-md-5 offset-sm-0 col-xl-7 col-lg-8 col-md-7 col-sm-12`}>
                    <form>
                        <h2 className='col-2 font-weight-bold mt-5 mb-3 p-0'>
                            Оплата
                        </h2>
                        <div className={`${payment.col50}`}>
                            <IconsFormPayment/>
                            <label className={`${payment.labelStyle}`}>
                                Владелец карты:
                            </label>
                            <input className={`${payment.inputStyle}`}
                                   type="text"
                                   placeholder="Фамилия Имя"/>
                            <label className={`${payment.labelStyle}`}>
                                Номер карты:
                            </label>
                            <input className={`${payment.inputStyle}`}
                                   type="text"
                                   placeholder="1111-2222-3333-4444"/>

                            <div className={`${payment.row}`}>
                                <div className={`${payment.col50}`}>
                                    <label className={`${payment.labelStyle}`}>
                                        Год:
                                    </label>
                                    <input className={`${payment.inputStyle}`}
                                           type="text"
                                           placeholder={new Date().getFullYear()}/>
                                </div>
                                <div className={`${payment.col50}`}>
                                    <label className={`${payment.labelStyle}`}>
                                        Месяц:
                                    </label>
                                    <input className={`${payment.inputStyle}`}
                                           type="text"
                                           placeholder={new Date().getMonth()}/>
                                </div>
                                <div className={`${payment.col50} ml-2`}>
                                    <label className={`${payment.labelStyle}`}>
                                        CVV
                                    </label>
                                    <input className={`${payment.inputStyle}`}
                                           type="text"
                                           placeholder="352"/>
                                </div>
                            </div>
                        </div>
                        <Link to={`/${paymentSuccessful}/${keyExcursion}`}
                              className={`${style.btnBig} mr-5 mb-2 mb-sm-0`}>
                            Продолжить
                        </Link>
                        <Link to={`/${signUpEvent}/${keyExcursion}`}
                              className={`${style.btnWhite} text-center`}>
                            Отменить
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PaymentPage;