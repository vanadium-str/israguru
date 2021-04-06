import React from 'react';
import Popup from "reactjs-popup";

const ModalCity = () => {
    return (
        <Popup
            trigger={<input className='w-75 d-flex flex-row cursor' type='text' placeholder='Тель Авив Яффо'/>}
            on='hover'
            contentStyle ={{cursor: "pointer"}}
        >
            <div className='container-fluid cursor'>
                <div className='row'>
                    <div className='col-8 popupHeader'>
                        <h1>Топ популярных направлений</h1>
                    </div>
                    <div className='col-4 popupList'>
                        <ul>
                            <li className='cursor'>Иерусалим</li>
                            <li className='cursor'>Тель-Авив</li>
                            <li className='cursor'>Кейсария</li>
                            <li className='cursor'>Хайфа</li>
                            <li className='cursor'>Эйлат</li>
                            <li className='cursor'>Акко</li>
                            <li className='cursor'>Цфат</li>
                        </ul>
                    </div>
                </div>
            </div>
        </Popup>
    );
};

export default ModalCity;