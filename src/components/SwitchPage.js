import React, {useContext} from 'react';
import {IsraGuruContext} from "../utils/сontext";
import FullInfoExcursion from "./view_event/FullInfoExcursion";
import GuideInfo from "./guideInfo/index";
import Home from "./Home";
import SignupEvent from "./signup_event/SignupEvent";
import {fullInfo, guidePath, homePage, paymentPage, paymentSuccessful, signUpEvent} from "../utils/constants";
import {Switch} from "react-router-dom";
import {Route} from "react-router-dom";
import PaymentPage from "./payment/PaymentPage";
import PaymentSuccessful from "./payment/PaymentSuccessful";

const SwitchPage = () => {
    const {startDate, endDate} = useContext(IsraGuruContext);
    return (
        <Switch>
            <Route path={`/${paymentSuccessful}/:idExcursion`} render={routerProps => <PaymentSuccessful {...routerProps}/>} exact/>
            <Route path={`/${paymentPage}/:idExcursion`} render={routerProps => <PaymentPage {...routerProps}/>} exact/>
            <Route path={`/${signUpEvent}/:idExcursion`} render={routerProps=> <SignupEvent {...routerProps}/>} exact/>
            <Route path={`/${fullInfo}/:idExcursion`} render={routerProps=> <FullInfoExcursion {...routerProps}/>} exact/>
            <Route path={`/${guidePath}/:idGuide`} render={({match})=> <GuideInfo match={match}/>} exact/>
            <Route path={[`/`,`/${homePage}`]} render={routerProps=> <Home {...routerProps} />} exact/>
        </Switch>
    )
};

export default SwitchPage