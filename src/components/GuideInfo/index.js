import React from 'react';
import GuideAbout from "./GuideAbout";
import {guideInfo} from "../../json/guideInfo";
import other from "../../css_modules/other.module.css";

const Index = ({guide, id}) => {
    return (
        <div className={`container-fluid ${other.themeBack}`}>
            <div className='row'>
                <div className='col-3'>
                    {/*TODO => Take src from JSON*/}
                    <img className='rounded-circle w-100 mt-5 ml-5'
                         src={guideInfo[guide].imgGuide} alt='guide'/>
                </div>
                <div className='col-9 mt-5 d-flex justify-content-end'>
                            <GuideAbout guide={guide} id={id}/>
                </div>
            </div>
        </div>
    );
};

export default Index;