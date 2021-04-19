import React, {useContext} from 'react';
import GuideAbout from "./GuideAbout";
import {guideInfo} from "../../json/guideInfo";
import other from "../../css_modules/other.module.css";
import {IsraGuruContext} from "../../utils/Context";

const Index = (props) => {
    let keyGuide = props.match.params.idGuide;
    return (
        <div className={`container-fluid ${other.themeBack}`}>
            <div className='row'>
                <div className='col-3'>
                    <img className='rounded-circle w-100 mt-5 ml-5'
                         src={guideInfo[keyGuide].imgGuide} alt='guide'/>
                </div>
                <div className='col-9 mt-5 d-flex justify-content-end'>
                    <GuideAbout idGuide={keyGuide}/>
                </div>
            </div>
        </div>
    );
};

export default Index;