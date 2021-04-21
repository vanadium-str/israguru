import React from 'react';
import {bannerData} from "../json/bannerData";
import ErrorSearch from "./error/ErrorSearch";
import ViewStartPage from "./ViewStartPage";

const FindByLevelAndCity = ({level, city}) => {
    let selectedCity = Object.entries(bannerData).filter(k=>k[1].city.includes(city));
    let selectedByCityByLevel = selectedCity.filter(k=>k[1].level.includes(level));
    let selectedLevel = Object.entries(bannerData).filter(k =>k[1].level.includes(level));
    // console.log(selectedCity);
    // console.log(selectedLevel);
    // console.log(selectedByCityByLevel);

    if (city === '' && level === '') {
        console.log('1');
        return (
            <ViewStartPage data={Object.entries(bannerData)}/>
        );
    }
    if(selectedByCityByLevel.length){
        console.log('2');
        return (
            <ViewStartPage data={selectedByCityByLevel}/>
        );
    }
    if (selectedLevel.length && !city) {
        console.log('4');
        return (
            <ViewStartPage data={selectedLevel}/>
        );
    }
    if (selectedCity.length && !level) {
        console.log('5');
        return (
            <ViewStartPage data={selectedCity}/>
        );
    }
    return (
        <ErrorSearch/>
    );
}

export default FindByLevelAndCity;