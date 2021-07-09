import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import QRCode from "qrcode.react";
import DateOfExcursion from "../excursionBlock/DateOfExcursion";
import {FaClock, FaMapMarkerAlt, FaUserFriends} from "react-icons/fa";
import styled from "styled-components";
import other from "../../css_modules/other.module.css";
import button from "../../css_modules/button.module.css";
import {excursionData} from "../../json/excursionData";
import {guideInfo} from "../../json/guideInfo";
import {homePage, time} from "../../utils/constants";
import {IsraGuruContext} from "../../utils/сontext";
import {PDFDownloadLink} from "@react-pdf/renderer";
import PdfComponent from "./PDFComponent";
import emailjs from "emailjs-com";

const StyledPayment = styled.div`
  min-height: 95vh;
`;

const PaymentSuccessful = (props) => {
    const {customerData} = useContext(IsraGuruContext);
    let keyExcursion = props.match.params.idExcursion;
    const timeFull = excursionData[keyExcursion].timeTo - excursionData[keyExcursion].timeFrom;
    const sendEmail = () => {
        emailjs.send('service_b1h5ily', 'template_gmtrbm7', customerData, 'user_3XrLj4rgDfjfq4TSQinTf')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
            })
            .catch((err) => {
                console.log('FAILED...', err);
            });
    }
    return (
        <StyledPayment className={`container-fluid ${other.themeBack}`}>
            <div className='col-xl-8 col-lg-8
            offset-xl-3 offset-lg-4 col-md-6 offset-md-5 smallView'>
                <h2 className='font-weight-bold mb-5 pt-5'>
                    Поздравляем, Вам понравится
                </h2>

                <div className='row shadow'>
                    <div className='col-md-12 col-lg-8'>
                        <h3 className={`font-weight-bold border-bottom border-dark
                         mb-3 pb-3 mt-3`}>
                            {excursionData[keyExcursion].title}
                        </h3>
                        <div className='row no-gutters border-bottom border-dark smallViewTwo'>
                            <div className='col-6 pl-4'>
                                <DateOfExcursion id={keyExcursion}/>
                            </div>
                            <div>
                                <p className='m-0 mr-4 mr-sm-0 font-weight-bold'>
                                    <FaMapMarkerAlt/> {excursionData[keyExcursion].city}
                                </p>
                                <p className='m-0 mb-3 mb-sm-0'>
                                    <FaClock/>
                                    <b>{excursionData[keyExcursion].timeFrom} - {excursionData[keyExcursion].timeTo} </b>
                                    ({timeFull} {time(timeFull)})
                                </p>
                            </div>
                        </div>

                        <div className='row mt-3 mb-2'>
                            <div className='col-6'>
                                <p className='small mb-0'>
                                    Ваш гид:
                                </p>
                                <p>
                                    {guideInfo[excursionData[keyExcursion].guide].name} {guideInfo[excursionData[keyExcursion].guide].surname}
                                </p>
                            </div>
                            <div className='d-flex align-items-end'>
                                <p className='font-weight-bold'>
                                    <FaUserFriends/> 1 человек
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='col-8 col-sm-8 col-md-8 col-lg-4
                     offset-2 offset-lg-0
                     d-flex align-items-center justify-content-center'>
                        <div className='w-75'>
                            <QRCode
                                id='qrcode'
                                renderAs = 'canvas'
                                value ={`http://localhost:3000/project-israguru/payment_successful/${keyExcursion}`}//will be an order number
                                bgColor='#FFFFFF'
                                fgColor='#000000'
                                level = 'M'
                            />
                        </div>
                        {console.log(customerData)}
                    </div>
                </div>

                <div className='mt-5 contentCenter'>
                    <Link className={`${button.btnBig} 
                    mr-md-3 mr-lg-5 mb-3`} to={`/${homePage}`}
                          // onClick={()=>sendEmail()}
                    >
                        Сохранить
                    </Link>
                    <PDFDownloadLink
                        document={<PdfComponent keyExcursion = {keyExcursion}/>}
                        fileName='new.pdf'
                        className={`${button.btnWhite} text-center`}
                    >Скачать PDF</PDFDownloadLink>
                </div>
            </div>
        </StyledPayment>
    );
};

export default PaymentSuccessful;