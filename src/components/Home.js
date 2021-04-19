import React from 'react';
import Header from "./start_page/Header";
import Footer from "./start_page/Footer";
import Main from "./start_page/Main";
import {bannerData} from "../json/bannerData";
import ErrorSearch from "./error/ErrorSearch";

const Home = ({level, city}) => {
    let selectedCity = Object.entries(bannerData).filter(k=>k[1].city.includes(city));
    let selectedLevel = Object.entries(bannerData).filter(k => k[1].level.includes(level));
    let selectedByCityByLevel = selectedCity.filter(k=>k[1].level.includes(level));

    if (city === '' && level === '') {
        console.log('1');
        return (
            <div>
                <Header/>
                {Object.entries(bannerData).map((data) => {
                    return (
                        <Main
                            key={data[0]}
                            id={data[0]}
                            guide={data[1].guide}
                        />
                    );
                })}
                <Footer/>
            </div>);
    }

    if(selectedByCityByLevel.length){
        return (
            <div>
                <Header/>
                {selectedByCityByLevel.map((data) => {
                    return (
                        <Main
                            key={data[0]}
                            id={data[0]}
                            guide={data[1].guide}
                        />
                    );
                })}
                <Footer/>
            </div>
        );
    }

    if (selectedLevel.length && !city) {
        console.log('3');
        return (
            <div>
                <Header/>
                {selectedLevel.map((data) => {
                    return (
                        <Main
                            key={data[0]}
                            id={data[0]}
                            guide={data[1].guide}
                        />
                    );
                })}
                <Footer/>
            </div>
        );
    }

    if (selectedCity.length && !level) {
        console.log('4');
        return (
            <div>
                <Header/>
                {selectedCity.map((data) => {
                    return (
                        <Main
                            key={data[0]}
                            id={data[0]}
                            guide={data[1].guide}
                        />
                    );
                })}
                <Footer/>
            </div>
        );
    }

    return (
        <ErrorSearch/>
    );
}

export default Home;