import React from 'react';
import {IsraGuruContext} from "./utils/Context";
import FullInfoExcursion from "./view_event/FullInfoExcursion";
import GuideInfo from "./GuideInfo/index";
import Home from "./Home";

const StartPage = () => {
    return (
        <IsraGuruContext.Consumer>{
            ({displayPage, guide})=>{
                switch (displayPage) {
                    case 'fullInfo':
                        return <FullInfoExcursion guide={guide}/>;
                    case 'guideInfo':
                        return <GuideInfo guide={guide}/>
                    default:
                        return <Home guide={guide}/>


                }
            }
        }
        </IsraGuruContext.Consumer>
    );
};

export default StartPage;