import React, {Component} from 'react';
import Header from "./Header";
import Footer from "./Footer";
import ExcursionList from "./ExcursionList";
import {bannerData} from "../json/bannerData";

class Main extends Component{
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <Header/>
                {bannerData.map((data, key) => {
                    return (
                        <ExcursionList
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

export default Main;