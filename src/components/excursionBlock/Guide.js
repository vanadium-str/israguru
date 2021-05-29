import React from 'react';
import {Link} from "react-router-dom";
import {guideInfo} from "../../json/guideInfo";
import {guidePath} from "../../utils/constants";
import style from "../../css_modules/guide.module.css";
import link from "../../css_modules/link.module.css";

const Guide = ({guide}) => {
    return (
        <div className='row'>
            <img className={`${style.avatarGuide} mr-2 rounded-circle`}
                 src={guideInfo[guide].imgGuide}
                 alt='guide'/>
            <div>
                <p className='small mb-0'>
                    Ваш гид:
                </p>
                <Link className={`${link.link} mb-0`}
                      to={`/${guidePath}/${guide}`}>
                    {guideInfo[guide].name} {guideInfo[guide].surname}
                </Link>
            </div>
        </div>
    );
};

export default Guide;