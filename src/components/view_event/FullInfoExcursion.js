import React from 'react';
import Guide from "../excursionBlock/Guide";
import Description from "../excursionBlock/Description";
import DateOfExcursion from "../excursionBlock/DateOfExcursion";
import Info from "../excursionBlock/Info";
import ButtonAccept from "./ButtonAccept";
import Logo from "../Logo";
import Gallery from "./Gallery";
import MapContainer from "./MapContainer";
import other from "../../css_modules/other.module.css";
import {FaInfoCircle} from "react-icons/all";
import {excursionData} from "../../json/excursionData";
import {FaGraduationCap} from "react-icons/fa";

const FullInfoExcursion = (props) => {
    let keyExcursion = props.match.params.idExcursion;
    return (
        <div className={`${other.themeBack} container-fluid pr-5`}>
            <div className='row'>
                <div className='col-3 p-0'>
                    <Logo/>
                </div>
                <div className='col-7 mb-5 mt-5'>
                    <Guide guide={excursionData[keyExcursion].guide} id={keyExcursion}/>
                </div>
                <div className='col-2 mb-5 mt-5'>
                    <ButtonAccept id={keyExcursion}/>
                </div>
            </div>

            <div className='row'>
                <div className='col-3 offset-1'>
                    <Gallery id={keyExcursion}/>
                </div>
                <div className='col-8 border-bottom border-dark'>
                    <Description id={keyExcursion}/>
                    <div className='row mr-0 ml-0 d-flex justify-content-around'>
                        <div className='d-flex align-items-center'>
                            <DateOfExcursion id={keyExcursion}/></div>
                        <div>
                            <Info id={keyExcursion}/>
                        </div>
                    </div>
                    <p className='mb-5'>{excursionData[keyExcursion].fullDescription}</p>
                </div>
            </div>

            <div className='row'>
                <div className='col-3 offset-1'>
                    <MapContainer id={keyExcursion}/>
                </div>
                <div className='col-8 border-bottom border-dark'>
                    <h4 className='font-weight-bold mb-3 mt-4'>Где встречаемся?</h4>
                    <p className='mb-5'>
                        {excursionData[keyExcursion].meetingPlace}</p>
                    <div className={`${other.bottom} small font-italic`}>
                        {excursionData[keyExcursion].additionalInfo ?
                            <p className='mb-1'>
                                <FaInfoCircle/>  {excursionData[keyExcursion].additionalInfo}
                            </p> : <div></div>}
                        <p className=''>
                            <FaGraduationCap/> Уровень сложности материала: {excursionData[keyExcursion].level}
                        </p>
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