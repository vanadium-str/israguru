import React from 'react';
import {bannerData} from "../json/bannerData";
import ErrorSearch from "./error/ErrorSearch";
import ViewPage from "./ViewPage";

const Home = ({level, city}) => {
    let selectedCity = Object.entries(bannerData).filter(k=>k[1].city.includes(city));
    let selectedByCityByLevel = selectedCity.filter(k=>k[1].level.includes(level));
    let selectedLevel = Object.entries(bannerData).filter(k =>k[1].level.includes(level));
    console.log(selectedCity);
    console.log(selectedLevel);
    console.log(selectedByCityByLevel);

    if (city === '' && level === '') {
        console.log('1');
        return (
                <ViewPage data={Object.entries(bannerData)}/>
        );
    }
    if(selectedByCityByLevel.length){
            return (
                <ViewPage data={selectedByCityByLevel}/>
            );
    }
    if (selectedLevel.length && !city) {
        console.log('3');
        return (
            <ViewPage data={selectedLevel}/>
        );
    }
    if (selectedCity.length && !level) {
        console.log('4');
        return (
            <ViewPage data={selectedCity}/>
        );
    }
    return (
        <ErrorSearch/>
    );
}

export default Home;