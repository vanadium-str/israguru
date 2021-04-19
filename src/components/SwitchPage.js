import React, {useContext} from 'react';
import {IsraGuruContext} from "../utils/Context";
import FullInfoExcursion from "./view_event/FullInfoExcursion";
import GuideInfo from "./guideInfo/index";
import Home from "./Home";
import SignupEvent from "./signup_event/SignupEvent";
import {fullInfo, guidePath, homePage, signUpEvent} from "../utils/constants";
import {Switch} from "react-router-dom";
import {Route} from "react-router-dom";

const SwitchPage = () => {
    const { idExcursion, idGuide, level, city} = useContext(IsraGuruContext);
    return (
        <Switch>
            <Route path={`/${signUpEvent}`} render={routerProps=><SignupEvent {...routerProps} idGuide={idGuide} idExcursion={idExcursion}/>} exact/>
            <Route path={`/${fullInfo}/:idExcursion`} render={routerProps=><FullInfoExcursion {...routerProps}/>} exact/>
            <Route path={`/${guidePath}/:idGuide`} render={({match})=><GuideInfo nick={'peter'} match={match}/>} exact/>
            <Route path={[`/`,`/${homePage}`]} render={routerProps=><Home {...routerProps} level={level} city={city}/>} exact/>
        </Switch>
    )
};

export default SwitchPage