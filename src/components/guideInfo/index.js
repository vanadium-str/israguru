import React from 'react';
import GuideAbout from "./GuideAbout";
import Logo from "../Logo";
import {guideInfo} from "../../json/guideInfo";
import other from "../../css_modules/other.module.css";

const Index = (props) => {
    let keyGuide = props.match.params.idGuide;

    return (
        <div className={`container-fluid ${other.themeBack}`}>
            <div className='row'>
                <Logo/>
            </div>

            <div className='row'>
                <div className='col-xl-4 col-lg-4 col-md-5'>
                    <img className='rounded-circle'
                         src={guideInfo[keyGuide].imgGuide}
                         alt='guide'
                         width='100%'/>
                </div>
                <div className='col-xl-8 col-lg-8 col-md-7'>
                    <GuideAbout idGuide={keyGuide}/>
                </div>
            </div>
        </div>
    );
};

export default Index;