import React from 'react';
import {FaClock, FaMapMarkerAlt, FaMapSigns, FaShekelSign, FaUserFriends} from "react-icons/fa";


const Main = () => {
    return (
        <div className='container-fluid'>
            <div className='row border-bottom'>
                <div className='col-8'>
                    <div className='d-flex justify-content-between'>
                        <img src='https://i.imgur.com/B4wu8rx.jpg' alt='picture'  width='160' height='160'/>
                        <div className='ml-4'>
                            <h1 className='theme font-weight-bold'>Тель-Авив. С чего все начиналось и кто во всем
                                виноват?</h1>
                            <p className='description font-italic'> Это новая экскурсия, которой я хочу начать "новый
                                сезон" -
                                после выхода
                                из карантина.
                                Эта экскурсия расскажет о почти 20-летнем периоде между созданием Неве Цедека - первого
                                еврейского
                                поселения за пределами стен Яффо и Тель-Авива - первого еврейского города.</p>
                            <hr/>
                            <p><FaMapSigns/> Уровень сложности материала: турист (обзорная).</p>
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
                    <div className='row bottom'>
                        <img className='mr-1 h-25 w-25 rounded-circle' src='https://i.imgur.com/ehJcD5r.jpg' alt='guide'/>
                        <div>
                            <p className='small mb-0'>Ваш гид:</p>
                            <p>Святослав Волк</p>
                        </div>
                    </div>
                </div>
                <div className='col-2'>
                    <div className='top'>
                    <p className='m-0 font-weight-bold'><FaMapMarkerAlt/> Тель Авив Яффо</p>
                    <p className='m-0'><FaClock/> <b>16.00 - 20.00 </b>(4 часа)</p>
                    <p className='m-0'><FaShekelSign/> <b>150</b> (≈$36)</p>
                    <p className='font-weight-bold'><FaUserFriends/> Осталось 5 мест</p>
                    </div>
                    <div className='bottom'>
                        <button className='btnBig'>Подробнее</button>
                    </div>
                </div>
            </div>


            <div className='row border-bottom'>
                <div className='col-8'>
                    <div className='d-flex justify-content-between'>
                        <img src='https://i.imgur.com/B4wu8rx.jpg' alt='picture'  width='160' height='160'/>
                        <div className='ml-4'>
                            <h1 className='theme font-weight-bold'>Тель-Авив. С чего все начиналось и кто во всем
                                виноват?</h1>
                            <p className='description font-italic'> Это новая экскурсия, которой я хочу начать "новый
                                сезон" -
                                после выхода
                                из карантина.
                                Эта экскурсия расскажет о почти 20-летнем периоде между созданием Неве Цедека - первого
                                еврейского
                                поселения за пределами стен Яффо и Тель-Авива - первого еврейского города.</p>
                            <hr/>
                            <p><FaMapSigns/> Уровень сложности материала: турист (обзорная).</p>
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
                    <div className='row bottom'>
                        <img className='mr-1 h-25 w-25 rounded-circle' src='https://i.imgur.com/ehJcD5r.jpg' alt='guide'/>
                        <div>
                            <p className='small mb-0'>Ваш гид:</p>
                            <p>Святослав Волк</p>
                        </div>
                    </div>
                </div>
                <div className='col-2'>
                    <div className='top'>
                        <p className='m-0 font-weight-bold'><FaMapMarkerAlt/> Тель Авив Яффо</p>
                        <p className='m-0'><FaClock/> <b>16.00 - 20.00 </b>(4 часа)</p>
                        <p className='m-0'><FaShekelSign/> <b>150</b> (≈$36)</p>
                        <p className='font-weight-bold'><FaUserFriends/> Осталось 5 мест</p>
                    </div>
                    <div className='bottom'>
                        <button className='btnBig'>Подробнее</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;