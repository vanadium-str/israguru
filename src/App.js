import './App.css';
import React, {Component} from 'react';
import {IsraGuruContext} from "./utils/Context";
import StartPage from "./components/StartPage";


class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            displayPage: '',
            guide:'',
            id:''
        }
    }
    changePage = (page, guide, id) => {
        this.setState({
            displayPage: page,
            guide,
            id
        });
    }

    render() {
        return (
            <IsraGuruContext.Provider value={
                {
                    changePage: this.changePage,
                    displayPage: this.state.displayPage,
                    guide: this.state.guide,
                    id: this.state.id
                }
            }>
                <StartPage/>
            </IsraGuruContext.Provider>
            // return <SignupEvent/>
        )
    }
}

export default App;