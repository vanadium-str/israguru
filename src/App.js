import './App.css';
import React, {Component} from 'react';
import {IsraGuruContext} from "./components/utils/Context";
import StartPage from "./components/StartPage";


class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            displayPage: '',
            guide:''
            // guideData:guideInfo,
            // excursionData: bannerData
        }
    }
    changePage = (page, guide) => {
        this.setState({
            displayPage: page,
            guide
        });
    }

    render() {
        return (
            <IsraGuruContext.Provider value={
                {
                    changePage: this.changePage,
                    displayPage: this.state.displayPage,
                    guide:this.state.guide
                }
            }>
                <StartPage/>
            </IsraGuruContext.Provider>
            // return <SignupEvent/>
        )
    }
}

export default App;