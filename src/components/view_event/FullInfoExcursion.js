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
        <div className={`${other.themeBack} container-fluid pr-5 pr-sm-3`}>
            <div className='row'>
                <div className='col-12 col-md-5 col-lg-4 col-xl-3
                pb-3 pb-md-0 p-0'>
                    <Logo/>
                </div>
                <div className='col-6 col-sm-8 col-md-4 col-lg-5 col-xl-7
                offset-lg-1 offset-xl-0
                ml-4 ml-md-0 mb-5 mt-5'>
                    <Guide guide={excursionData[keyExcursion].guide} id={keyExcursion}/>
                </div>
                <div className='col-5 col-sm-3 col-md-3 col-lg-2 col-xl-2
                mb-5 mt-5'>
                    <ButtonAccept id={keyExcursion}/>
                </div>
            </div>

            <div className='row'>
                <div className='
                col-12 col-sm-7 col-md-5 col-lg-4 col-xl-3
                offset-sm-2 offset-md-0 offset-xl-1'>
                    <Gallery id={keyExcursion}/>
                </div>
                <div className='mt-sm-3 mb-3 mb-md-0 mt-md-0 ml-3 ml-sm-0
                offset-sm-1 offset-md-0
                col-12 col-sm-11 col-md-7 col-lg-8
                border-bottom border-dark'>
                    <Description id={keyExcursion}/>
                    <div className='row mr-0 ml-0 d-flex justify-content-around'>
                        <div className='d-flex align-items-center'>
                            <DateOfExcursion id={keyExcursion}/></div>
                        <div>
                            <Info id={keyExcursion}/>
                        </div>
                    </div>
                    <p className='mb-sm-5 smallSizeDescription'>
                        {excursionData[keyExcursion].fullDescription}
                    </p>
                </div>
            </div>

            <div className='row'>
                <div className='
                col-12 col-sm-7 col-md-5 col-lg-4 col-xl-3
                offset-sm-2 offset-md-0 offset-xl-1'>
                    <MapContainer id={keyExcursion}/>
                </div>
                <div className='offset-1 offset-sm-0
                col-11 col-md-7 col-lg-8
                border-bottom border-dark'>
                    <h4 className='font-weight-bold mb-3 mt-4'>Где встречаемся?</h4>
                    <p className='mb-5 pb-sm-4 pb-md-0 paddingInfo'>
                        {excursionData[keyExcursion].meetingPlace}</p>
                    <div className={`${other.bottom} small font-italic`}>
                        {excursionData[keyExcursion].additionalInfo ?
                            <p className='mb-1'>
                                <FaInfoCircle/>  {excursionData[keyExcursion].additionalInfo}
                            </p> : <></>}
                        <p>
                            <FaGraduationCap/> Уровень сложности материала: {excursionData[keyExcursion].level}
                        </p>
                    </div>
                </div>
            </div>

            <div className='row mt-3'>
                <div className='col-4 col-sm-3 col-md-2
                offset-1 offset-md-5 offset-lg-4 offset-xl-3
                d-flex align-items-center'>
                    <DateOfExcursion id={keyExcursion}/>
                </div>
                <div className='col-7 col-sm-5 col-md-3 col-lg-4 col-xl-5
                d-flex justify-content-center'>
                    <Info id={keyExcursion}/>
                </div>
                <div className='col-12 col-sm-3 col-md-2
                d-flex align-items-center justify-content-center'>
                    <ButtonAccept id={keyExcursion}/>
                </div>
            </div>
        </div>
    );
}

export default FullInfoExcursion;