import React, {useContext} from 'react';
import Modal from 'react-modal';
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
    const {show, setShow} = useContext(IsraGuruContext);
    const showModal = () => {
        setShow(true);
    };
    const hideModal = () => {
        setShow(false);
    };
    return (
        <div className={`${other.themeBack} container-fluid`}>
            <div className='row'>
            <div>
                <Logo/>
            </div>
                <div className='offset-2 mt-5'>
                    <h2 className={`font-weight-bold`}>Записаться и оплатить</h2>
                </div>
            </div>
            <div className='row shadow m-4'>
                <div className='col-3 d-flex align-items-center'>
                    <Image id={keyExcursion}/>
                </div>
                <div className='col-6 mt-3'>
                    <Description id={keyExcursion}/>
                </div>
                <div className='col-3'>
                    <div className='ml-3 mt-3'>
                        <DateOfExcursion id={keyExcursion}/>
                    </div>
                    <div><Info id={keyExcursion}/></div>
                    <div className='mb-3'><Guide id={keyExcursion} guide={excursionData[keyExcursion].guide}/></div>
                </div>
            </div>
            <div className='row mt-5'>
                <div className='col-4 offset-3'>
                    <input className={`${sign.signUpEvent}`} type='text' placeholder='Имя'/>
                    <input className={`${sign.signUpEvent}`} type='text' placeholder='Телефон'/>
                    <input className={`${sign.signUpEvent}`} type='text' placeholder='Email'/>
                </div>
                <div className='col-4'>
                    <p className={`font-weight-bold`}>Внимание:</p>
                    <p className={`${style.description} font-italic`}>Будьте внимательны при заполнении...</p>
                </div>
            </div>
            <div className='row'>
                <div className='col-9 offset-3 mt-3'>
                    <p className={`${sign.text}`}><b>Количество</b> (до 10)</p>
                    <a  className={`ml-4 ${sign.previous} ${sign.round}`}>-</a>
                    <input className={`ml-2 ${sign.count} border-0 text-center`} type='number' min={0} defaultValue='0'/>
                    <a className={`ml-2 ${sign.next} ${sign.round}`}>+</a>
                </div>

            </div>
            <div className='row'>
                <div className='col-sm-3 offset-3 d-flex flex-column align-items-center'>
                        <Link to={`/${paymentPage}/${keyExcursion}`} className={`${button.btnBig} mt-5`}>
                            Оплатить
                        </Link>
                        <p className={`${sign.pay} small ${sign.text} mb-5`}>Нажимая "Оплатить", я соглашаюсь с
                            <a onClick={()=>showModal()} className='p-0 cursor' >правилами приватности</a>
                            <Modal
                                isOpen={show}
                                closeTimeoutMS={150}
                                onRequestClose={hideModal}
                            >
                                <PrivacyPolicy/>
                                <button className='close' type="button" onClick={()=>hideModal()}>
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