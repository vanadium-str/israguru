import React from 'react';
import {FaFacebookMessenger, FaTelegram, FaViber} from "react-icons/fa";
import Description from "../excursionBlock/Description";
import Date from "../excursionBlock/Date";
import Button from "../excursionBlock/Button";
import {bannerData} from "../../json/bannerData";

const GuideAbout = props => {
    return (
        <div>
            <h2 className='theme font-weight-bold'>{props.name} {props.surname}</h2>
            <div>Лицензированный гид (верифицирован israguru.com)</div>
            <div className='scroll'>
                <h4 className='font-weight-bold'>Кто я </h4>
                <p>{props.description}</p>
                <h4 className='font-weight-bold'>Ближайшие экскурсии</h4>
                {bannerData.map((data, key) => {
                    return (
                        <div className='row border-bottom'>
                            <div className='col-9 p-0'><Description summary={data.summary} level={data.level}
                                                                    title={data.title}/></div>
                            <div className='col-3 d-flex justify-content-center'>
                                <div><Date/></div>
                                <div className='bottom mb-5'><Button/></div>
                            </div>
                        </div>)
                })}
                <h4 className='font-weight-bold'>Я могу</h4>
                <div>Также в индивидуальном порядке могу провести экскурсии по следующим городам:
                    <ul>
                        <li>Иерусалим</li>
                        <li>Тель-Авив</li>
                        <li>Кейсария</li>
                    </ul></div>
                <h4 className='font-weight-bold'>Связаться со мной</h4>
                <p className='mb-0'>Телефон: 11111111111</p>
                <p>Соцсети и мессенджеры</p>
                <div>
                    <FaTelegram/>
                    <FaViber/>
                    <FaFacebookMessenger/>
                </div>
            </div>
        </div>
    );
};

export default GuideAbout;