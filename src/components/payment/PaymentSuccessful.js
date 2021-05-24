import React, {useContext} from 'react';
import other from "../../css_modules/other.module.css";
import button from "../../css_modules/button.module.css";
import {excursionData} from "../../json/excursionData";
import {guideInfo} from "../../json/guideInfo";
import DateOfExcursion from "../excursionBlock/DateOfExcursion";
import {FaClock, FaMapMarkerAlt, FaUserFriends} from "react-icons/fa";
import styled from "styled-components";
import {homePage, time} from "../../utils/constants";
import {Link} from "react-router-dom";

const StyledPayment = styled.div`
  min-height: 95vh;
`;

const PaymentSuccessful = (props) => {
    let keyExcursion = props.match.params.idExcursion;
    const timeFull = excursionData[keyExcursion].timeTo - excursionData[keyExcursion].timeFrom;
    return (
        <StyledPayment className={`container-fluid ${other.themeBack}`}>
            <div className='col-8 offset-3'>
                <h2 className='font-weight-bold mb-5 pt-5'>Поздравляем, Вам понравится</h2>
                <div className='row shadow'>
                    <div className='col-8'>
                        <h3 className={`font-weight-bold border-bottom border-dark mb-3 pb-3 mt-3`}>
                            {excursionData[keyExcursion].title}
                        </h3>
                        <div className='row border-bottom border-dark'>
                            <div className='col-6 pl-4'><DateOfExcursion id={keyExcursion}/></div>
                            <div>
                                <p className='m-0 font-weight-bold'><FaMapMarkerAlt/> {excursionData[keyExcursion].city}
                                </p>
                                <p className='m-0'><FaClock/> <b>{excursionData[keyExcursion].timeFrom} - {excursionData[keyExcursion].timeTo} </b>
                                    ({timeFull} {time(timeFull)})
                                </p>
                            </div>
                        </div>
                        <div className='row mt-3 mb-2'>
                            <div className='col-6'>
                                <p className='small mb-0'>Ваш гид:</p>
                                <p>
                                    {guideInfo[excursionData[keyExcursion].guide].name} {guideInfo[excursionData[keyExcursion].guide].surname}
                                </p>
                            </div>
                            <div className='d-flex align-items-end'>
                                <p className='font-weight-bold'><FaUserFriends/> 1 человек </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-4 d-flex align-items-center justify-content-center'>
                        <img className='w-75' src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png' alt='QR'/>
                    </div>
                </div>
                <div className='mt-5'>
                    <Link className={`${button.btnBig} mr-5`} to={`/${homePage}`}>Сохранить</Link>
                    <a href='https://www.facebook.com/' className={`${button.btnWhite} text-center`}>Поделиться в FB</a>
                </div>
            </div>
        </StyledPayment>
    );
};

export default PaymentSuccessful;