import React from 'react';
import {IsraGuruContext} from "../../utils/Context";
import style from "../../css_modules/guide.module.css";
import {guideInfo} from "../../json/guideInfo";

const Guide = ({guide, id}) => {
    return (
        <IsraGuruContext.Consumer>
            {
                value=>
                    <div className='row'>
                        <img className={`${style.imgGuide} mr-1 rounded-circle`} src={guideInfo[guide].imgGuide}
                             alt='guide'/>
                        <div>
                            <p className='small mb-0'>Ваш гид:</p>
                            <p className='cursor' onClick={() => {
                                value.changePage('guideInfo', guide, id)
                            }}>{guideInfo[guide].name}  {guideInfo[guide].surname}</p>
                        </div>
                    </div>
            }
        </IsraGuruContext.Consumer>
    );
};

export default Guide;