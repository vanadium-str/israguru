import React, {useContext} from 'react';
import {IsraGuruContext} from "../../utils/Context";
import style from "../../css_modules/guide.module.css";
import {guideInfo} from "../../json/guideInfo";
import {Link} from "react-router-dom";
import {guidePath} from "../../utils/constants";

const Guide = ({guide, id}) => {
    const {changePage} = useContext(IsraGuruContext);
    return (
        <div className='row no-gutters'>
            <img className={`${style.imgGuide} rounded-circle mr-1`} src={guideInfo[guide].imgGuide}
                 alt='guide'/>
            <div>
                <p className='small mb-0'>Ваш гид:</p>
                <Link className='link' to={`/${guidePath}`} onClick={() => {
                    changePage(guidePath, guide, id)
                }}>{guideInfo[guide].name} {guideInfo[guide].surname}</Link>
            </div>
        </div>
    );
};

export default Guide;