import React, {useEffect, useState} from 'react';
import {FaClock, FaMapMarkerAlt, FaShekelSign, FaUserFriends} from "react-icons/fa";
import other from "../../css_modules/other.module.css";
import {bannerData} from "../../json/bannerData";
import {currencyURL} from "../../utils/constants";

const Info = ({id}) => {
    const [sum, setSum] = useState('0');
    // useEffect(()=>{
    //     fetch(`${currencyURL}/latest?access_key=0c8f58ca32f891ac4ad7690fce291152`)
    //         .then(response => response.json())
    //         .then(({rates})=>{
    //                 //console.log(rates);
    //                 const res = rates['USD']/rates['ILS']*bannerData[id].price;
    //                 setSum(res.toFixed(2));
    //             }
    //         )
    // })

    return (
        <div className={`${other.top}`}>
            <p className='m-0 font-weight-bold'><FaMapMarkerAlt/> {bannerData[id].city}</p>
            <p className='m-0'><FaClock/> <b>{bannerData[id].timeFrom} - {bannerData[id].timeTo}</b> ({bannerData[id].timeTo - bannerData[id].timeFrom} часа)</p>
            <p className='m-0'><FaShekelSign/> <b>{bannerData[id].price}</b> (${sum})</p>
            <p className='font-weight-bold'><FaUserFriends/> Осталось {bannerData[id].places} мест</p>
        </div>
    );
};

export default Info;