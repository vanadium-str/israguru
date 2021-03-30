import React from 'react';
import Image from "../excursionBlock/Image";
import Description from "../excursionBlock/Description";
import Date from "../excursionBlock/Date";
import Guide from "../excursionBlock/Guide";
import {guideInfo} from "../../json/guideInfo";
import Info from "../excursionBlock/Info";
import Button from "../excursionBlock/Button";

const Main = (props) => {
    return (
        <div className='container-fluid'>
            <div className='row shadow mb-3'>
                <div className='col-8'>
                    <div className='d-flex justify-content-between'>
                        <div><Image img={props.img}/></div>
                        <div className='ml-4'><Description summary={props.summary} level={props.level} title={props.title}/></div>
                    </div>
                </div>
                <div className='col-2'>
                    <Date/>
                    {guideInfo.filter(k=>k.id===props.guide).map((data,key) =>{
                        return (
                            <div className='row bottom'>
                                <Guide name={data.name} surname={data.surname} img={data.imgGuide} guide={props.guide}/>
                            </div>
                        )
                    })}
                </div>
                <div className='col-2'>
                    <Info city={props.city} timeFrom={props.timeFrom} timeTo={props.timeTo} price={props.price} places={props.places}/>
                    <div className='bottom'>
                        <Button  guide={props.guide}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;