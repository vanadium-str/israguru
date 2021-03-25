import React from 'react';
import Image from "../excursionBlock/Image";
import Description from "../excursionBlock/Description";
import Date from "../excursionBlock/Date";
import Guide from "../excursionBlock/Guide";
import Info from "../excursionBlock/Info";
import Button from "../excursionBlock/Button";
import {guideInfo} from "../../json/guideInfo";

const Main = (props) => {
    return (
        <div className='container-fluid'>
            <div className='row border-bottom'>
                <div className='col-8'>
                    <div className='d-flex justify-content-between'>
                        <Image img={props.img}/>
                        <Description summary={props.summary} level={props.level} title={props.title}/>
                    </div>
                </div>
                <div className='col-2'>
                    <Date/>
                    {guideInfo.filter(k=>k.id===props.guide).map((data,key) =>{
                        return (
                            <Guide name={data.name} surname={data.surname} changePage={props.changePage}/>
                        )
                    })}
                </div>
                <div className='col-2'>
                    <Info city={props.city} timeFrom={props.timeFrom} timeTo={props.timeTo} price={props.price} places={props.places}/>
                    <div className='bottom'>
                    <Button changePage={props.changePage}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;