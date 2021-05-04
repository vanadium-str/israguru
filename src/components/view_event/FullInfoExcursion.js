import React, {useContext} from 'react';
import Guide from "../excursionBlock/Guide";
import Image from "../excursionBlock/Image";
import Description from "../excursionBlock/Description";
import DateOfExcursion from "../excursionBlock/DateOfExcursion";
import Info from "../excursionBlock/Info";
import {FaInfoCircle} from "react-icons/all";
import {bannerData} from "../../json/bannerData";
import style from "../../css_modules/button.module.css";
import other from "../../css_modules/other.module.css";
import MapContainer from "../../map/MapContainer";
import {IsraGuruContext} from "../../utils/сontext";
import {guideInfo, signUpEvent} from "../../utils/constants";
import {Link} from "react-router-dom";
import ButtonAccept from "./ButtonAccept";
import Logo from "../Logo";

const FullInfoExcursion = (props) => {
    let keyExcursion = props.match.params.idExcursion;
    return (
        <div className={`${other.themeBack}`}>
            <div className='row'>
                <div className='col-3'>
                    <Logo/>
                </div>
                <div className='col-7 mb-5 mt-5'>
                    <Guide guide={bannerData[keyExcursion].guide} id={keyExcursion}/>
                </div>
                <div className='col-2 mb-5 mt-5'>
                    <ButtonAccept id={keyExcursion}/>
                </div>
            </div>
            <div className='row'>
                <div className='col-3 ml-5 marginPicture'>
                    <Image id={keyExcursion}/>
                </div>
                <div className='col-8 border-bottom border-dark'>
                    <Description id={keyExcursion}/>
                    <div className='row mr-0 ml-0 d-flex justify-content-around'>
                        <div className='d-flex align-items-center'>
                            <DateOfExcursion id={keyExcursion}/>
                        </div>
                        <div>
                            <Info id={keyExcursion}/>
                        </div>
                    </div>
                    <p className='mb-5'>{bannerData[keyExcursion].fullDescription}</p>
                </div>
            </div>
            <div className='row'>
                <div className='col-3 ml-3 mr-5'>
                    {/*<MapContainer/>*/}
                </div>
                <div className='col-8 border-bottom border-dark'>
                    <h4 className='font-weight-bold mb-3 mt-4'>Где встречаемся?</h4>
                    {/*TODO => Take from JSON bannerData*/}
                    <p className='mb-5'>
                        Часовая башня в Яффо. На перекрестке у фалафельной. На левой стороне
                        от причала в пятницу в {bannerData[keyExcursion].timeFrom}.
                        Будем рады видеть вас и ваших детей (от 4-х лет) и собак (от года).</p>
                    {/*TODO =>Take from JSON bannerData*/}
                    <div className='small font-italic mb-3'>
                        <FaInfoCircle/>
                        Участникам программы МАСА и репатриантам до
                        1 года - 50% скидка
                    </div>
                </div>
            </div>
            <div className='row mt-3'>
                <div className='col-2 offset-3 d-flex align-items-center'>
                    <DateOfExcursion id={keyExcursion}/>
                </div>
                <div className='col-5 d-flex justify-content-center'>
                    <Info id={keyExcursion}/>
                </div>
                <div className='col-2 d-flex align-items-center'>
                    <ButtonAccept id={keyExcursion}/>
                </div>
            </div>
        </div>
    );
}

export default FullInfoExcursion;