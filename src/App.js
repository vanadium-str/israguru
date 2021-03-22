import './App.css';
import React, {Component} from 'react';
import Main from "./components/Main";
import FullInfoExcursion from "./components/FullInfoExcursion";
import GuideInfo from "./components/GuideInfo";


class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            displayPage: 'home'
        }
    }
    changePage = page => {
        this.setState({
            displayPage: page
        });
    }

    render() {
        switch (this.state.displayPage) {
            case 'fullInfo':
                return <FullInfoExcursion/>;
            case 'guideInfo':
                return <GuideInfo/>
            default:
                return <Main changePage={this.changePage}/>

        }
    }
}

export default App;
