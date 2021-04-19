import React, {useContext} from 'react';
import Guide from "../excursionBlock/Guide";
import Image from "../excursionBlock/Image";
import Description from "../excursionBlock/Description";
import Date from "../excursionBlock/Date";
import Info from "../excursionBlock/Info";
import {FaInfoCircle} from "react-icons/all";
import {bannerData} from "../../json/bannerData";
import other from "../../css_modules/other.module.css";
import MapContainer from "../../map/MapContainer";
import {IsraGuruContext} from "../../utils/Context";
import ButtonAccept from "../signup_event/ButtonAccept";
import Logo from "../Logo";

const FullInfoExcursion = () => {
    const {idExcursion, idGuide} = useContext(IsraGuruContext);
    return (
        <div className={`${other.themeBack}`}>
            <div className='row'>
                <div className='col-3'>
                    <Logo/>
                </div>
                <div className='col-7 mb-5 mt-5'>
                    <Guide guide={idGuide} id={idExcursion}/>
                </div>
                <div className='col-2 mb-5 mt-5'>
                   <ButtonAccept/>
                </div>
            </div>
            {/*TODO*/}
            <div className='row'>
                <div className='col-3 marginPicture'>
                    <Image id={idExcursion}/>
                </div>
                <div className='col-8 border-bottom border-dark'>
                    <Description id={idExcursion}/>
                    <div className='row mr-0 ml-0 d-flex justify-content-around'>
                        <div className='d-flex align-items-center'><Date/></div>
                        <div><Info id={idExcursion}/>
                        </div>
                    </div>
                    <p className='mb-5'>{bannerData[idExcursion].fullDescription}</p>
                </div>
            </div>
            <div className='row'>
                <div className='col-3 ml-3 mr-5'>
                    <MapContainer/>
                </div>
                <div className='col-8 border-bottom border-dark'>
                    <h4 className='font-weight-bold mb-3 mt-4'>Где встречаемся?</h4>
                    {/*TODO =>Take from JSON bannerData*/}
                    <p className='mb-5'>Часовая башня в Яффо. На перекрестке у фалафельной. На левой стороне
                        от причала в пятницу в {bannerData[idExcursion].timeFrom} TODO. Будем рады видеть вас и ваших
                        детей (от 4-х лет)
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
                <div className='col-5 d-flex justify-content-center'>
                    <Info id={idExcursion}/>
                </div>
                <div className='col-2'>
                    <ButtonAccept/>
                </div>
            </div>
        </div>
    );
}

export default FullInfoExcursion;