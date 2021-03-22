import React from 'react';
import {FaFacebookMessenger, FaTelegram, FaViber} from "react-icons/fa";
import ExcursionListShort from "./ExcursionListShort";
import {bannerData} from "../json/bannerData";
import ExcursionList from "./ExcursionList";

const GuideInfo = () => {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-2 leftLine'></div>
                <div className='offset-2 col-8 mt-5'>
                    <h2>Cвятослав Волк </h2>
                    <div>Лицензированный гид (верифицирован israguru.com)</div>
                    <div className='scroll'>
                        <h3>Кто я </h3>
                        <p>Одессит по рождению и тель-авивец по велению души,
                            гид по Израилю, еврейской Украине и Нью-Йорку, сотрудник дома-музея
                            Хаима Нахмана Бялика (Тель-Авив). Учился в иешиве, служил в Армии Обороны Израиля,
                            изучал киноискусство в колледже «Адасса». После выхода «Еврейского счастья» с Познером и
                            Ургантом Зеев стал известен миллионам телезрителей как специалист по Тель-Авиву, но на
                            самом деле ему есть о чём рассказать и далеко за его пределами. На Лимуде Волк собирается
                            представить слушателям историю моды в Израиле как историю социума и рассказать,
                            как одевались люди в Эрец Исраэль и что они хотели сказать своим внешним видом.</p>
                        <h3>Ближайшие экскурсии</h3>
                        {/*TODO*/}
                        {/*<Main/>*/}
                        {bannerData.map((data, key) => {
                            return (
                                <ExcursionListShort
                                    key={key}
                                    title={data.title}
                                    summary={data.summary}
                                    level={data.level}
                                    price={data.price}/>
                            )
                        })}
                        <h3>Я могу</h3>
                        <div>Также в индивидуальном пордке могу провести экскурсии по следующим городам:
                            <ul>
                                <li>Иерусалим</li>
                                <li>Тель-Авив</li>
                                <li>Кейсария</li>
                            </ul></div>
                        <h3>Связатья со мной</h3>
                        <p>Телефон: 11111111111</p>
                        <p>Соцсети и мессенджеры</p>
                        <div>
                            <FaTelegram/>
                            <FaViber/>
                            <FaFacebookMessenger/>
                        </div>

                    </div>
                </div>
                <img className='position-absolute mt-5 ml-5 h-25 w-25 rounded-circle' src='https://i.imgur.com/ehJcD5r.jpg' alt='guide'/>
            </div>
        </div>
    );
};

export default GuideInfo;