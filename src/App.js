import './App.css';
import React, {Component} from 'react';
import Home from "./components/Home";
import FullInfoExcursion from "./components/view_event/FullInfoExcursion";
import GuideInfo from "./components/GuideInfo/index";
import Description from "./components/excursionBlock/Description";
import SignupEvent from "./components/signup_event/SignupEvent";


class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            displayPage: 'home',
            guide:''
        }
    }
    changePage = (page, guide) => {
        this.setState({
            displayPage: page,
            guide
        });
    }

    render() {
        switch (this.state.displayPage) {
            case 'fullInfo':
                return <FullInfoExcursion guide={this.state.guide}/>;
            case 'guideInfo':
                return <GuideInfo changePage={this.changePage} guide={this.state.guide}/>
            default:
                return <Home changePage={this.changePage} guide={this.state.guide}/>

        }
        // return <SignupEvent/>
    }
}

export default App;
