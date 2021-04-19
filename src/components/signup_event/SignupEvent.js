import React from 'react';
import Image from "../excursionBlock/Image";
import Description from "../excursionBlock/Description";
import Date from "../excursionBlock/Date";
import Guide from "../excursionBlock/Guide";
import Info from "../excursionBlock/Info";
import style from "../../css_modules/main.module.css";
import button from "../../css_modules/button.module.css";
import other from "../../css_modules/other.module.css";
import sign from "../../css_modules/signUpEvent.module.css";
import Logo from "../Logo";


const SignupEvent = ({idExcursion, idGuide}) => {
    return (
        <div className={`${other.themeBack} container-fluid`}>
            <div className='row'>
            <div>
                <Logo/>
            </div>
                <div className='offset-2 mt-5'>
                    <h2 className={`${style.theme} font-weight-bold`}>Записаться и оплатить</h2>
                </div>
            </div>
            <div className='row shadow m-4'>
                <div className='col-3 d-flex align-items-center'>
                    <Image id={idExcursion}/>
                </div>
                <div className='col-6 mt-3'>
                    <Description id={idExcursion}/>
                </div>
                <div className='col-3'>
                    <div className='ml-3 mt-3'><Date/></div>
                    <div><Info id={idExcursion}/></div>
                    <div className='mb-3'><Guide id={idExcursion} guide={idGuide}/></div>
                </div>
            </div>
            <div className='row mt-5'>
                <div className='col-4 offset-3'>
                    <input className={`${sign.signUpEvent}`} type='text' placeholder='Имя'/>
                    <input className={`${sign.signUpEvent}`} type='text' placeholder='Телефон'/>
                    <input className={`${sign.signUpEvent}`} type='text' placeholder='Email'/>
                    <div className='row'>
                        <p className='col-5'><b>Количество</b> (до 10)</p>
                        <a href="#" className={`${sign.previous} ${sign.round} mr-1`}>-</a>
                        <input className='col-2 mr-1' type='number' min={0} defaultValue='0'/>
                        <a href="#" className={`${sign.next} ${sign.round}`}>+</a>
                    </div>
                    <button className={`${button.btnBig} mt-5`}>Оплатить</button>
                    <p className={`${sign.pay} small`}>Нажимая "Оплатить", я соглашаюсь с <a className='p-0' href="">правилами приватности</a></p>
                </div>
                <div className='col-4'>
                    <p className={`${style.theme} font-weight-bold`}>Внимание:</p>
                    <p className={`${style.description} font-italic`}>Будьте внимательны при заполнении...</p>
                </div>
            </div>
        </div>
    );
};

export default SignupEvent;