import React from 'react';
import {FaClock, FaMapMarkerAlt, FaMapSigns, FaShekelSign, FaUserFriends} from "react-icons/fa";
import Image from "../excursionBlock/Image";
import Description from "../excursionBlock/Description";

const Main = (props) => {
    return (
        <div className='container-fluid'>
            <div className='row border-bottom'>
                <div className='col-8'>
                    <div className='d-flex justify-content-between'>
                        <Image img={props.img}/>
                        <Description summary={props.summary} level={props.level} title={props.title}/>
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
                            <p onClick={()=>{props.changePage('guideInfo')}}>{props.guide}</p>
                        </div>
                    </div>
                </div>
                <div className='col-2'>
                    <div className='top'>
                        <p className='m-0 font-weight-bold'><FaMapMarkerAlt/> {props.city}</p>
                        <p className='m-0'><FaClock/> <b>{props.timeFrom} - {props.timeTo}</b>(4 часа)</p>
                        <p className='m-0'><FaShekelSign/> <b>{props.price}</b> (≈$36)</p>
                        <p className='font-weight-bold'><FaUserFriends/> Осталось {props.places} мест</p>
                    </div>
                    <div className='bottom'>
                        <button className='btnBig' onClick={()=>{props.changePage('fullInfo')}}>Подробнее</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;