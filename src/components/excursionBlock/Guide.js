import React from 'react';
import {IsraGuruContext} from "../utils/Context";
import style from "../../css_modules/guide.module.css";

const Guide = props => {
    return (
        <IsraGuruContext.Consumer>
            {
                value=>
                    <div className='row'>
                        <img className={`${style.imgGuide} mr-1 rounded-circle`} src={props.img}
                             alt='guide'/>
                        <div>
                            <p className='small mb-0'>Ваш гид:</p>
                            <p className='cursor' onClick={() => {
                                value.changePage('guideInfo', props.guide)
                            }}>{props.name}  {props.surname}</p>
                        </div>
                    </div>
            }
        </IsraGuruContext.Consumer>
    );
};

export default Guide;