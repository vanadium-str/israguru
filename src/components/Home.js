import React, {Component} from 'react';
import Header from "./start_page/Header";
import Footer from "./start_page/Footer";
import Main from "./start_page/Main";
import {bannerData} from "../json/bannerData";

class Home extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <Header/>
                {Object.values(bannerData).map((data, key) => {
                    return (
                        <Main id={key} guide={data.guide}/>
                    );
                })}
                <Footer/>
            </div>
        );
    }
}

export default Home;