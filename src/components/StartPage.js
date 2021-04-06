import React from 'react';
import {IsraGuruContext} from "../utils/Context";
import FullInfoExcursion from "./view_event/FullInfoExcursion";
import GuideInfo from "./GuideInfo/index";
import Home from "./Home";


const StartPage = () => {
    return (
        <IsraGuruContext.Consumer>{
            ({displayPage, guide, id})=>{
                switch (displayPage) {
                    case 'fullInfo':
                        return <FullInfoExcursion guide={guide} id={id}/>;
                    case 'guideInfo':
                        return <GuideInfo guide={guide} id={id}/>
                    default:
                        return <Home guide={guide}/>


                }
            }
        }
        </IsraGuruContext.Consumer>
    );
};

export default StartPage;