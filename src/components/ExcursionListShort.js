import React from 'react';
import {FaClock, FaMapMarkerAlt, FaMapSigns, FaShekelSign, FaUserFriends} from "react-icons/fa";

const ExcursionListShort = (props) => {
    return (
        <div className='container'>
            <div className='row border-bottom'>
                <div className='col-8'>
                    <div className='d-flex justify-content-between'>
                        <div>
                            <h1 className='theme font-weight-bold'>{props.title}</h1>
                            <p className='description font-italic'> {props.summary}</p>
                            <hr/>
                            <p><FaMapSigns/> Уровень сложности материала: {props.level}</p>
                        </div>
                    </div>
                </div>
                <div className='col-2'>
                    <div className='row top'>
                        <p className='font-weight-bold font-italic d-flex align-items-center mr-1 date'>03</p>
                        <div>
                            <p className='dash mb-0'>сентября</p>
                            <p>воскресенье</p>
                        </div>
                    </div>
                    <div className='bottom'>
                        {/*todo не работает нажатие на кнопку*/}
                        <button className='btnBig' onClick={()=>{props.changePage('fullInfo')}}>Подробнее</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExcursionListShort;