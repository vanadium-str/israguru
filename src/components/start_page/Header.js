import React from 'react';
import style from "../../css_modules/button.module.css";
import lang from "../../css_modules/header.module.css";
import ModalLevel from "../modal/ModalLevel";
import ModalCity from "../modal/ModalCity";
import ModalCalendar from "../modal/ModalCalendar";

const Header = () => {
    return (
        <header className='container-fluid'>
            <div className='row mb-3 ml-4'>
                <div className='col-3'>
                    <label>Поиск
                        <input className='w-100' type='search' placeholder='&#128269; Название, гид, другое'/>
                    </label>
                </div>
                <div className='col-3'>
                    <label>Дата
                        <div className='d-flex flex-row'>
                            <ModalCalendar/>
                        </div>
                    </label>
                </div>
                <div className='col-2'>
                    <label>Место
                        <ModalCity/>
                    </label>
                </div>
                <div className='col-2'>
                    <label>Уровень
                        <ModalLevel/>
                    </label>
                </div>
                <div className='col-2'>
                    <p className='font-italic mb-0'>Язык</p>
                    <div className={`${lang.labelLanguage} d-flex flex-row`}>
                        <button className={`${style.btn} btn w-50 font-weight-bold pl-0 pb-0 mr-1`}>Все</button>
                        <button className={`${style.btn} btn w-50 font-weight-bold pl-0 pb-0 mr-1`}>EN</button>
                        <button className={`${style.btn} btn w-50 font-weight-bold pl-0 pb-0`}>RU</button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;