import React, {useEffect, useState} from 'react';
import {FaClock, FaMapMarkerAlt, FaShekelSign, FaUserFriends} from "react-icons/fa";
import {FaComment} from "react-icons/all";
import {excursionData} from "../../json/excursionData";
import {currencyURL, time} from "../../utils/constants";

const Info = ({id}) => {
    const [sum, setSum] = useState('0');
    const timeFull = excursionData[id].timeTo - excursionData[id].timeFrom;

    useEffect(()=>{
        fetch(`${currencyURL}/latest?access_key=0c8f58ca32f891ac4ad7690fce291152`)
            .then(response => response.json())
            .then(({rates})=>{
                    const res = rates['USD']/rates['ILS']*excursionData[id].price;
                    setSum(res.toFixed(2));
                    });
    });

    return (
        <div>
            <p className='m-0 font-weight-bold'>
                <FaMapMarkerAlt/> {excursionData[id].city}
            </p>
            <p className='m-0'>
                <FaClock/> <b>{excursionData[id].timeFrom} - {excursionData[id].timeTo} </b>
                ({timeFull} {time(timeFull)})
            </p>
            <p className='m-0'>
                <FaShekelSign/> <b>{excursionData[id].price}</b> (${sum})
            </p>
            <p className='m-0 font-weight-bold'>
                <FaUserFriends/> Осталось {excursionData[id].places} мест
            </p>
            <p>
                <FaComment/> <b>Язык:</b> {excursionData[id].language}
            </p>
        </div>
    );
};

export default Info;