import React from 'react';
import Image from "../excursionBlock/Image";
import Description from "../excursionBlock/Description";
import Date from "../excursionBlock/Date";
import Guide from "../excursionBlock/Guide";
import Info from "../excursionBlock/Info";
import style from "../../css_modules/main.module.css";
import button from "../../css_modules/button.module.css";

const SignupEvent = (props) => {
    return (
        <div className='themeBack'>
            <div className='container-fluid'>
                <div className='row-cols-8 offset-3 mt-lg-5'>
                    <h2 className={`${style.theme} font-weight-bold`}>Записаться и оплатить</h2>
                </div>
                <div className='row shadow mb-3 mt-lg-5'>
                    <div className='col-8'>
                        <div className='d-flex justify-content-between'>
                            <Image img={props.img}/>
                            <Description summary={props.summary} level={props.level} title={props.title}/>
                        </div>
                    </div>
                    <div className='col-2'>
                        <Date/>
                        <Guide/>
                    </div>
                    <div className='col-2'>
                        <Info/>
                    </div>
                </div>
                <div className='row mt-lg-5'>
                    <div className='col-4 offset-3'>
                        <input className='signUpEvent' type='text' placeholder='Имя'/>
                        <input className='signUpEvent' type='text' placeholder='Телефон'/>
                        <input className='signUpEvent' type='text' placeholder='Email'/>
                        <div className='row'>
                            <p className='col-5'>Количество</p>
                            <a href="#" className="previous round mr-1">-</a>
                            <input className='col-2 mr-1' type='number' min={0} defaultValue='0'/>
                            <a href="#" className="next round">+</a>
                        </div>
                        <button className={`${button.btnBig} mt-5`}>Оплатить</button>
                        <p className='pay small'>Нажимая "Оплатить", я соглашаюсь с правилами приватности</p>
                    </div>
                    <div className='col-4'>
                        <p className={`${style.theme} font-weight-bold`}>Внимание:</p>
                        <p className={`${style.description} font-italic`}>Будьте внимательными при заполнении...</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignupEvent;