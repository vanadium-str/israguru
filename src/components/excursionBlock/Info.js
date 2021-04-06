import React from 'react';
import {FaClock, FaMapMarkerAlt, FaShekelSign, FaUserFriends} from "react-icons/fa";
import other from "../../css_modules/other.module.css";
import {bannerData} from "../../json/bannerData";

const Info = ({id}) => {
    return (
        <div className={`${other.top}`}>
            <p className='m-0 font-weight-bold'><FaMapMarkerAlt/> {bannerData[id].city}</p>
            <p className='m-0'><FaClock/> <b>{bannerData[id].timeFrom} - {bannerData[id].timeTo}</b>(4 часа)</p>
            <p className='m-0'><FaShekelSign/> <b>{bannerData[id].price}</b> (≈$36)</p>
            <p className='font-weight-bold'><FaUserFriends/> Осталось {bannerData[id].places} мест</p>
        </div>
    );
};

export default Info;