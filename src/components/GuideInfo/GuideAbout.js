import React from 'react';
import {FaFacebookMessenger, FaTelegram, FaViber} from "react-icons/fa";
import Description from "../excursionBlock/Description";
import Date from "../excursionBlock/Date";
import Button from "../excursionBlock/Button";
import style from "../../css_modules/main.module.css";
import other from "../../css_modules/other.module.css";
import {guideInfo} from "../../json/guideInfo";
import {bannerData} from "../../json/bannerData";

const GuideAbout = ({idExcursion, idGuide}) => {
    return (
        <div>
            <h2 className={`${style.theme} font-weight-bold`}>{guideInfo[idGuide].name} {guideInfo[idGuide].surname}</h2>
            <div className='mb-3'>Лицензированный гид (верифицирован israguru.com)</div>
            <div className={`${other.scroll}`}>
                <h4 className='font-weight-bold'>Кто я </h4>
                <p>{guideInfo[idGuide].description}</p>
                <h4 className='font-weight-bold mb-5 mt-5'>Ближайшие экскурсии</h4>
                {Object.entries(bannerData).filter(key=>key[1].guide===idGuide).map((data, key)=>{
                        return (
                            <div className='row shadow mb-2 mr-2 ml-1 p-2'>
                                <div className='col-9 p-0'>
                                    <Description key={data[0]} id={data[0]}/>
                                </div>
                                <div className='col-3 d-flex justify-content-center'>
                                    <div>
                                        <Date/>
                                    </div>
                                    <div className={`${other.bottom} mb-5`}>
                                        <Button guide={data[1].guide} id={data[0]}/>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                <h4 className='font-weight-bold mt-5'>Я могу</h4>
                <div>Также в индивидуальном порядке могу провести экскурсии по следующим городам:
                    <ul className='mt-2'>{guideInfo[idGuide].cities.map(cities =>
                        <li key={cities}>{cities}</li>)}
                    </ul>
                </div>
                <h4 className='font-weight-bold mt-5'>Связаться со мной</h4>
                <p className='mb-2'>Телефон: {guideInfo[idGuide].phone}</p>
                <p className='mb-2'>Соцсети и мессенджеры</p>
                <div className='mb-5'>
                    <FaTelegram/>
                    <FaViber/>
                    <FaFacebookMessenger/>
                </div>
            </div>
        </div>
    );
};

export default GuideAbout;