import React from 'react';
import telAviv from "../img/tel-aviv.jpg"
import {FaClock, FaMapMarkerAlt, FaMapSigns, FaShekelSign, FaUserFriends} from "react-icons/fa";
import guide from '../img/guide.jpg';


const Main = () => {
    return (
        <div className='container-fluid'>
            <div className='row border-bottom'>
                <div className='col-2'>
                    <img src={telAviv} alt='picture' width='160' height='160'/>
                </div>
                <div className='col-6'>
                    <h1 className='theme font-weight-bold'>Тель-Авив. С чего все начиналось и кто во всем виноват?</h1>
                    <p className='description font-italic'> Это новая экскурсия, которой я хочу начать "новый сезон" -
                        после выхода
                        из карантина.
                        Эта экскурсия расскажет о почти 20-летнем периоде между созданием Неве Цедека - первого
                        еврейского
                        поселения за пределами стен Яффо и Тель-Авива - первого еврейского города.</p>
                    <hr/>
                    <div className='row'>
                        <p><FaMapSigns/> Уровень сложности материала: турист (обзорная).</p>
                    </div>
                </div>
                <div className='col-2'>
                    <div className='row'>
                        <p className='font-weight-bold font-italic d-flex align-items-center mr-1 date'>03</p>
                        <div>
                            <p className='dash mb-0'>сентября</p>
                            <p>воскресенье</p>
                        </div>
                    </div>
                    <div className='row'>
                        <img className='w-25 rounded-circle' src={guide} alt='guide'/>
                        <div>
                        <p className='small'>Ваш гид:</p>
                        <p className=''>Святослав Волк</p>
                        </div>
                    </div>
                </div>
                <div className='col-2'>
                    <p className='m-0 font-weight-bold'><FaMapMarkerAlt/> Тель Авив Яффо</p>
                    <p className='m-0'><FaClock/> <b>16.00 - 20.00 </b>(4 часа)</p>
                    <p className='m-0'><FaShekelSign/> <b>150</b> (≈$36)</p>
                    <p className='font-weight-bold'><FaUserFriends/> Осталось 5 мест</p>
                    <button className='btnBig'>Подробнее</button>
                </div>
            </div>

            <div className='row border-bottom'>
                <div className='col-2'>
                    <img src={telAviv} alt='picture' width='160' height='160'/>
                </div>
                <div className='col-6'>
                    <h1 className='theme font-weight-bold'>Тель-Авив. С чего все начиналось и кто во всем виноват?</h1>
                    <p className='description font-italic'> Это новая экскурсия, которой я хочу начать "новый сезон" -
                        после выхода
                        из карантина.
                        Эта экскурсия расскажет о почти 20-летнем периоде между созданием Неве Цедека - первого
                        еврейского
                        поселения за пределами стен Яффо и Тель-Авива - первого еврейского города.</p>
                    <hr/>
                    <div className='row'>
                        <p><FaMapSigns/> Уровень сложности материала: турист (обзорная).</p>
                    </div>
                </div>
                <div className='col-2'>
                    <p className='dash mb-0'>сентября</p>
                    <p>воскресенье</p>
                    <div className='row'>
                        <img className='w-25 rounded-circle' src={guide} alt='guide'/>
                        <p className='small'>Ваш гид:</p>
                        <p className='flex-wrap'>Святослав Волк</p>
                    </div>
                </div>
                <div className='col-2'>
                    <p className='m-0 font-weight-bold'><FaMapMarkerAlt/> Тель Авив Яффо</p>
                    <p className='m-0'><FaClock/> <b>16.00 - 20.00 </b>(4 часа)</p>
                    <p className='m-0'><FaShekelSign/> <b>150</b> (≈$36)</p>
                    <p className='font-weight-bold'><FaUserFriends/> Осталось 5 мест</p>
                    <button className='btnBig'>Подробнее</button>
                </div>
            </div>
        </div>
    );
};

export default Main;