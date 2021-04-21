import React from 'react';
import style from "../../css_modules/button.module.css";
import lang from "../../css_modules/header.module.css";
import SearchLevel from "../search/SearchLevel";
import SearchCity from "../search/SearchCity";
import Calendar from "../search/Calendar";
import SearchPage from "../search/SearchPage";

const Header = () => {
    return (
        <header className='container-fluid'>
            <header className='row mb-3 ml-4'>
                <div className='col-3'>
                    <label>Поиск
                        <SearchPage/>
                    </label>
                </div>
                <div className='col-3'>
                    <label>Дата
                        <div className='d-flex flex-row'>
                            <Calendar/>
                        </div>
                    </label>
                </div>
                <div className='col-2'>
                    <label>Место
                        <SearchCity/>
                    </label>
                </div>
                <div className='col-2'>
                    <label>Уровень
                        <SearchLevel/>
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
            </header>
        </header>
    );
};

export default Header;