import React, {useContext} from 'react';
import SelectLevel from "../search/SelectLevel";
import SelectCity from "../search/SelectCity";
import Calendar from "../search/Calendar";
import SearchBar from "../search/SearchBar";
import {IsraGuruContext} from "../../utils/сontext";
import lang from "../../css_modules/header.module.css";

const Header = () => {
    const {language, setLanguage, setCurrentPage, setShowStartPage} = useContext(IsraGuruContext);

    return (
        <header className='container-fluid'>
            <header className='row mb-3 ml-4'>
                <div className='col-3'>
                    <label>Поиск
                        <SearchBar/>
                    </label>
                </div>

                <div className='col-3'>
                    <label>Дата
                        <div className='d-flex flex-row calendar'>
                            <Calendar/>
                        </div>
                    </label>
                </div>

                <div className='col-2'>
                    <label>Место
                        <SelectCity/>
                    </label>
                </div>

                <div className='col-2'>
                    <label>Уровень
                        <SelectLevel/>
                    </label>
                </div>

                <div className='col-2'>
                    <p className='font-italic mb-0'>
                        Язык
                    </p>
                    <div className={`${lang.labelLanguage} d-flex flex-row`}>
                        <button
                            className={`${language === '' ? 'colorBtnLang' : ''}
                                btn w-50 font-weight-bold pl-0 pb-0 mr-1`}
                            onClick={() => {
                                setLanguage('');
                                setCurrentPage(1);
                                setShowStartPage(false);
                            }}>
                            Все
                        </button>

                        <button
                            className={` ${language === 'English' ? 'colorBtnLang' : ''}
                                btn w-50 font-weight-bold pl-0 pb-0 mr-1`}
                            onClick={() => {
                                setLanguage('English');
                                setCurrentPage(1);
                                setShowStartPage(false);
                            }}>
                            EN
                        </button>
                        <button className={`${language === 'Русский' ? 'colorBtnLang' : ''}
                            btn w-50 font-weight-bold pl-0 pb-0`} onClick={() => {
                            setLanguage('Русский');
                            setCurrentPage(1);
                            setShowStartPage(false);
                        }}>
                            RU
                        </button>
                    </div>
                </div>
            </header>
        </header>
    );
};

export default Header;