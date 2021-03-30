import React from 'react';
import Guide from "../excursionBlock/Guide";
import Image from "../excursionBlock/Image";
import Description from "../excursionBlock/Description";
import Date from "../excursionBlock/Date";
import Info from "../excursionBlock/Info";
import {FaInfoCircle} from "react-icons/all";
import {guideInfo} from "../../json/guideInfo";
import {bannerData} from "../../json/bannerData";
import style from "../../css_modules/button.module.css";

const FullInfoExcursion = (props) => {
    return (
        <div className='themeBack'>
            <div className='row'>
                <div className='col-7 offset-3 mb-5 mt-5'>
                    <Guide img={guideInfo.find(item => item.id === props.guide).imgGuide}
                           name={guideInfo.find(item => item.id === props.guide).name}
                           surname={guideInfo.find(item => item.id === props.guide).surname}
                    />
                </div>
                <div className='col-2 mb-5 mt-5'>
                    <button className={`${style.btnBig}`}>Пойду</button>
                </div>
            </div>
            {/*TODO*/}
            <div className='row'>
                <div className='col-3 ml-5'>
                    <Image img={bannerData.find(item => item.guide === props.guide).img}/>
                </div>
                <div className='col-8 border-bottom border-dark'>
                    <Description
                        summary={bannerData.find(item => item.guide === props.guide).summary}
                        level={bannerData.find(item => item.guide === props.guide).level}
                        title={bannerData.find(item => item.guide === props.guide).title}/>
                    <div className='row mr-0 ml-0 d-flex justify-content-around'>
                        <div className='d-flex align-items-center'><Date/></div>
                        <div><Info
                            city={bannerData.find(item => item.guide === props.guide).city}
                            timeFrom={bannerData.find(item => item.guide === props.guide).timeFrom}
                            timeTo={bannerData.find(item => item.guide === props.guide).timeTo}
                            price={bannerData.find(item => item.guide === props.guide).price}
                            places={bannerData.find(item => item.guide === props.guide).places}/>
                        </div>
                    </div>
                    <p className='mb-5'>{bannerData.find(item => item.guide === props.guide).fullDescription}</p>
                </div>
            </div>
            <div className='row'>
                {/*TODO => Take from JSON bannerData + (image size)*/}
                <img className='col-3 ml-5' src='' alt='MAP'/>
                <div className='col-8 border-bottom border-dark'>
                    <h4 className='font-weight-bold mb-3 mt-4'>Где встречаемся?</h4>
                    {/*TODO =>Take from JSON bannerData*/}
                    <p className='mb-5'>Часовая башня в Яффо. На перекрестке у фалафельной. На левой стороне
                        от причала в пятницу в {props.timeFrom} TODO. Будем рады видеть вас и ваших детей (от 4-х лет)
                        и собак (от года).</p>
                    {/*TODO =>Take from JSON bannerData*/}
                    <div className='small font-italic mb-3'><FaInfoCircle/> Участникам программы МАСА и репатриантам до
                        1 года - 50% скидка
                    </div>
                </div>
            </div>
            <div className='row mt-3'>
                <div className='col-2 offset-3'>
                    <Date/>
                </div>
                <div className='col-5'>
                    <Info
                        city={bannerData.find(item => item.guide === props.guide).city}
                        timeFrom={bannerData.find(item => item.guide === props.guide).timeFrom}
                        timeTo={bannerData.find(item => item.guide === props.guide).timeTo}
                        price={bannerData.find(item => item.guide === props.guide).price}
                        places={bannerData.find(item => item.guide === props.guide).places}/>
                </div>
                <div className='col-2'>
                    <button className={`${style.btnBig}`}>Пойду</button>
                </div>
            </div>
        </div>
    );
};

export default FullInfoExcursion;