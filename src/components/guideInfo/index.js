import React, {useContext} from 'react';
import GuideAbout from "./GuideAbout";
import {guideInfo} from "../../json/guideInfo";
import other from "../../css_modules/other.module.css";
import Logo from "../Logo";

const Index = (props) => {
    let keyGuide = props.match.params.idGuide;
    return (
        <div className={`container-fluid ${other.themeBack}`}>
            <div className='row'><Logo/></div>
            <div className='d-flex justify-content-around'>
                <div className='mt-5'>
                    <img className='rounded-circle'
                         src={guideInfo[keyGuide].imgGuide} alt='guide' width='300'/>
                </div>
                <div>
                    <GuideAbout idGuide={keyGuide}/>
                </div>
            </div>
        </div>
    );
};

export default Index;