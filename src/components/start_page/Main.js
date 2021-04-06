import React from 'react';
import Image from "../excursionBlock/Image";
import Description from "../excursionBlock/Description";
import Date from "../excursionBlock/Date";
import Guide from "../excursionBlock/Guide";
import Info from "../excursionBlock/Info";
import Button from "../excursionBlock/Button";
import other from "../../css_modules/other.module.css";

const Main = ({id, guide}) => {
    return (
        <div className='container-fluid'>
            <div className='row shadow mb-3'>
                <div className='col-8'>
                    <div className='d-flex justify-content-between'>
                        <div className='mt-2'><Image id={id}/></div>
                        <div className='ml-4 mb-2'><Description id={id}/></div>
                    </div>
                </div>
                <div className='col-2'>
                    <Date/>
                            <div className={`row ${other.bottom}`}>
                                <Guide guide={guide} id={id}/>
                            </div>

                </div>
                <div className='col-2'>
                    <Info id={id}/>
                    <div className={`${other.bottom}`}>
                        <Button guide={guide} id={id}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;