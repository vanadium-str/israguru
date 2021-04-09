import React, {useContext} from 'react';
import {IsraGuruContext} from "../utils/Context";
import FullInfoExcursion from "./view_event/FullInfoExcursion";
import GuideInfo from "./GuideInfo/index";
import Home from "./Home";
import SignupEvent from "./signup_event/SignupEvent";


const StartPage = () => {
    const {displayPage, idExcursion, idGuide, level} = useContext(IsraGuruContext);
    switch (displayPage) {
        case 'fullInfo':
            return <FullInfoExcursion idGuide={idGuide} idExcursion={idExcursion}/>;
        case 'guideInfo':
            return <GuideInfo idGuide={idGuide} idExcursion={idExcursion}/>;
        case 'signUp':
            return <SignupEvent idGuide={idGuide} idExcursion={idExcursion}/>
        default:
            return <Home level={level}/>;
    }
};

export default StartPage;