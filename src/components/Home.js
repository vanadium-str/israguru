import React, {Component} from 'react';
import Header from "./start_page/Header";
import Footer from "./start_page/Footer";
import Main from "./start_page/Main";
import {bannerData} from "../json/bannerData";

class Home extends Component{
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <Header/>
                {bannerData.map((data, key) => {
                    return (
                        <Main
                            key={key}
                            title={data.title}
                            summary={data.summary}
                            level={data.level}
                            img={data.img}
                            guide={data.guide}
                            city={data.city}
                            timeFrom={data.timeFrom}
                            timeTo={data.timeTo}
                            price={data.price}
                            places={data.places}
                            changePage={this.props.changePage}/>
                    )
                })}
                <Footer/>
            </div>
        );
    }
};

export default Home;