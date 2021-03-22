import React from 'react';
import {FaSistrix} from "react-icons/all";

const Header = () => {
    return (
        <header className='container-fluid'>
        <div className='row mb-3 ml-4'>
            <div className='col-3'>
                {/*<FaSistrix/> иконка с лупой*/}
                <label>Поиск
                    <input className='w-100' type='search' placeholder='Название, гид, другое'/>
                </label>
            </div>
            <div className='col-3'>
                <label>Дата
                    <div className='d-flex flex-row'>
                    <input className='w-25 mr-3' type='text' placeholder='Month'/>
                    <input  className='w-25' type='text' placeholder='mm dd'/>
                    </div>
                </label>
            </div>
            <div className='col-2'>
                <label>Место
                    <input className='w-75 d-flex flex-row' type='text' placeholder='Тель Авив Яффо'/>
                </label>
            </div>
            <div className='col-2'>
                <label>Уровень
                    <input className='w-75 d-flex flex-row' type='text' placeholder='Местный'/>
                </label>
            </div>
            <div className='col-2'>
                <label className='labelLanguage'>Язык
                    <div className='d-flex flex-row'>
                    <button className='btn w-25 mr-1 font-weight-bold pl-0 pb-0'>EN</button>
                    <button className='btn w-25 font-weight-bold pb-0'>RU</button>
                    </div>
                </label>
            </div>
        </div>
        </header>
    );
};

export default Header;