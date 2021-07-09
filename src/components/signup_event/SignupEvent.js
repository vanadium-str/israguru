import React, {useContext} from 'react';
import Modal from 'react-modal';
import emailjs from 'emailjs-com';
import {Link} from "react-router-dom";
import Image from "../excursionBlock/Image";
import Description from "../excursionBlock/Description";
import DateOfExcursion from "../excursionBlock/DateOfExcursion";
import Guide from "../excursionBlock/Guide";
import Info from "../excursionBlock/Info";
import PrivacyPolicy from "./PrivacyPolicy";
import Logo from "../Logo";
import style from "../../css_modules/main.module.css";
import button from "../../css_modules/button.module.css";
import other from "../../css_modules/other.module.css";
import sign from "../../css_modules/signupEvent.module.css";
import {paymentPage} from "../../utils/constants";
import {IsraGuruContext} from "../../utils/сontext";
import {excursionData} from "../../json/excursionData";

const SignupEvent = (props) => {
    let keyExcursion = props.match.params.idExcursion;
    const {showModalWindow, setShowModalWindow,customerData, setCustomerData} = useContext(IsraGuruContext);

    const showModal = () => {
        setShowModalWindow(true);
    };

    const hideModal = () => {
        setShowModalWindow(false);
    };
    const handleGetData= event => {
        event.preventDefault();
    }


    return (
        <div className={`${other.themeBack} container-fluid`}>

            <div className='row'>
                <div className='col-12 col-md-5 col-lg-4 col-xl-3
                pb-3 pb-md-0 p-0'>
                    <Logo/>
                </div>
                <div className='pt-5 pt-md-0 mt-5
                col-12 col-md-7 col-lg-8 col-xl-9
                offset-1 offset-md-0'>
                    <h2 className={`font-weight-bold`}>
                        Записаться и оплатить
                    </h2>
                </div>
            </div>

            <div className='row shadow m-sm-4'>
                <div className='col-xl-3 col-lg-2 col-md-7 col-sm-8
                offset-lg-0 offset-md-5 offset-sm-4
                d-flex align-items-center mt-2 mt-lg-0
                contentCenterSignUp'>
                    <Image id={keyExcursion}/>
                </div>
                <div className='col-xl-6 col-lg-8 col-md-7
                offset-xl-0 offset-lg-2 offset-md-5 mt-3'>
                    <Description id={keyExcursion}/>
                </div>
                <div className='row col-xl-3 col-lg-8 col-md-7
                offset-xl-0 offset-lg-4 offset-md-5'>
                    <div className='col-sm-12 contentCenter'>
                        <div className='ml-3 mt-3 contentCenterSignUp
                            col-12 col-sm-3 col-md-4 col-lg-3 col-xl-12'>
                            <DateOfExcursion id={keyExcursion}/>
                        </div>
                        <div className='contentCenterSignUp
                        offset-2 offset-sm-0
                        col-10 col-sm-6 col-md-8 col-lg-5 col-xl-12'>
                            <Info id={keyExcursion}/>
                        </div>
                    </div>
                    <div className='mb-3 offset-sm-1
                    col-sm-4 col-md-3 col-lg-3 col-xl-12
                    contentCenterSignUp'>
                        <Guide id={keyExcursion}
                               guide={excursionData[keyExcursion].guide}/>
                    </div>
                </div>
            </div>

            <div className='row mt-5'>
                <div className='col-xl-4 col-lg-4 col-md-7
                offset-xl-3 offset-lg-4 offset-md-5 offset-sm-1' onSubmit={handleGetData}>
                    <input className={`${sign.signUpEvent} contentCenter`}
                           type='text'
                           placeholder='Имя'
                           name='name'
                           value={customerData.name}
                           onChange={ e=>setCustomerData({...customerData, name: e.target.value})}
                    />
                    <input className={`${sign.signUpEvent} contentCenter`}
                           type='text'
                           placeholder='Телефон'
                           name='phone'
                           // value={customerData.phone}
                           onChange={ e=>setCustomerData({...customerData, phone: e.target.value})}
                    />
                    <input className={`${sign.signUpEvent} contentCenter`}
                           type='text'
                           placeholder='Email'
                           name='email'
                           value={customerData.email}
                           onChange={ e=>setCustomerData({...customerData, email: e.target.value})}
                    />
                </div>
                <div className={`col-xl-4 col-lg-2 col-md-7
                    offset-xl-0 offset-lg-1 offset-md-5 offset-sm-1
                    ${sign.signUpNone}`}>
                    <p className={`font-weight-bold`}>
                        Внимание:
                    </p>
                    <p className={`${style.description} font-italic`}>
                        Будьте внимательны при заполнении...
                    </p>
                </div>
            </div>

            <div className='row'>
                <div className='col-xl-9 col-lg-8 col-md-7
                offset-xl-3 offset-lg-4 offset-md-5 offset-sm-1 mt-3
                '>
                    <div className='contentCenterSignUp mb-2 mb-sm-0'>
                        <p className={`${sign.text}`}>
                            <b>Количество</b> (до 10)
                        </p>
                    </div>
                    <div className='contentCenterSignUp'>
                        <a className={`ml-sm-2 ${sign.previous} ${sign.round}`}>-</a>

                        <input
                            className={`ml-2 ${sign.count} border-0 text-center`}
                            type='number'
                            min={0}
                            defaultValue='0'/>

                        <a className={`ml-2 ${sign.next} ${sign.round}`}>+</a>
                    </div>
                </div>
            </div>

            <div className='row'>
                <div className='col-xl-3 col-lg-3 col-md-8 col-sm-6
                offset-xl-3 offset-lg-4 offset-md-4 offset-sm-3
                d-flex flex-column align-items-center'>
                    <Link to={`/${paymentPage}/${keyExcursion}`}
                          className={`${button.btnBig} mt-5`}
                    >
                        Оплатить
                    </Link>

                    <p className={`${sign.pay} small ${sign.text} mb-5`}>
                        Нажимая "Оплатить", я соглашаюсь с
                        <a onClick={() => showModal()} className='p-0 cursor'>
                            правилами приватности
                        </a>

                        <Modal
                            isOpen={showModalWindow}
                            closeTimeoutMS={150}
                            onRequestClose={hideModal}>

                            <PrivacyPolicy/>
                            <button className='close'
                                    type="button"
                                    onClick={() => hideModal()}>
                                x
                            </button>
                        </Modal>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignupEvent;