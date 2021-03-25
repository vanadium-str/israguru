import React from 'react';
import {FaClock, FaMapMarkerAlt, FaShekelSign, FaUserFriends} from "react-icons/fa";

const Info = props => {
    return (
        <div className='top'>
            <p className='m-0 font-weight-bold'><FaMapMarkerAlt/> {props.city}</p>
            <p className='m-0'><FaClock/> <b>{props.timeFrom} - {props.timeTo}</b>(4 часа)</p>
            <p className='m-0'><FaShekelSign/> <b>{props.price}</b> (≈$36)</p>
            <p className='font-weight-bold'><FaUserFriends/> Осталось {props.places} мест</p>
        </div>
    );
};

export default Info;