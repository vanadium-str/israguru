import React from 'react';
import GuideAbout from "./GuideAbout";
import Logo from "../Logo";
import {guideInfo} from "../../json/guideInfo";
import other from "../../css_modules/other.module.css";
import style from "../../css_modules/guide.module.css";

const Index = (props) => {
    let keyGuide = props.match.params.idGuide;

    return (
        <div className={`container-fluid position-relative ${other.themeBack}`}>
            <div className='row'>
                <Logo/>
            </div>

            <div className={`row ${style.guideAbout}`}>
                <div className='col-xl-3 col-lg-4 col-md-5 guideImg'>
                    <img className='rounded-circle'
                         src={guideInfo[keyGuide].imgGuide}
                         alt='guide'
                         width='100%'/>
                </div>
                <div className='col-xl-8 col-lg-8 col-md-7 guideInfo'>
                    <GuideAbout idGuide={keyGuide}/>
                </div>
            </div>
        </div>
    );
};

export default Index;