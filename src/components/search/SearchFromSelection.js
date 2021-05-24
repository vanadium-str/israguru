import React, {useContext} from 'react';
import ErrorSearch from "../error/ErrorSearch";
import StartPage from "../StartPage";
import {IsraGuruContext} from "../../utils/сontext";
import {findByDate, excursions} from "../../utils/constants";

const SearchFromSelection = ({data}) => {
    const {level, city, startDate, endDate, language} = useContext(IsraGuruContext);
    let selectedByLanguage = language?data.filter(k=>k[1].language.includes(language)):data;
    let selectedByDate = selectedByLanguage.filter(k=>findByDate(k[1].date, startDate, endDate));//by date
    let selectedCity = selectedByLanguage.filter(k=>k[1].city.includes(city));//by City
    let selectedLevel = selectedByLanguage.filter(k =>k[1].level.includes(level));//by Level
    let selectedByCityAndLevel = selectedCity.filter(k=>k[1].level.includes(level));//by city and level
    let selectedByCityLevelDate = selectedByCityAndLevel.filter(k=>findByDate(k[1].date, startDate, endDate));//all options
    let selectedByCityAndDate = selectedCity.filter(k=>findByDate(k[1].date, startDate, endDate));//by city and date
    let selectedByLevelAndDate = selectedLevel.filter(k=>findByDate(k[1].date, startDate, endDate));// by level and date
    // console.log(selectedByLanguage);
    // console.log(selectedLevel);
    // console.log(selectedCity);
    // console.log(selectedByDate);
    //default
    if (city === '' && level === '' && startDate === endDate) {
        console.log('1');
        return (
            <StartPage data={data}/>
        );
    }
    //only date
    if(selectedByDate.length && !city && !level){
        console.log('2');
        return (
            <StartPage data={selectedByDate}/>
        );
    }
    //only level
    if (selectedLevel.length && !selectedByDate.length && !city) {
        console.log('3');
        return (
            <StartPage data={selectedLevel}/>
        );
    }
    //only city
    if (selectedCity.length && !level && !selectedByDate.length) {
        console.log('4');
        return (
            <StartPage data={selectedCity}/>
        );
    }
    //if city and level are selected, but date isn't
    if(selectedByCityAndLevel.length && !selectedByDate.length){
        console.log('5');
        return (
            <StartPage data={selectedByCityAndLevel}/>
        );
    }
    //if city and date are selected, but level isn't
    if(selectedByCityAndDate.length && !level){
        console.log('6');
        return (
            <StartPage data={selectedByCityAndDate}/>
        );
    }

    //if date and level are selected, but city isn't
    if(selectedByLevelAndDate.length && !city){
        console.log('7');
        return (
            <StartPage data={selectedByLevelAndDate}/>
        );
    }

    //if all options are selected
    if(selectedByCityLevelDate.length){
        console.log('8');
        return (
            <StartPage data={selectedByCityLevelDate}/>
        );
    }

    return (
        <StartPage data={0}/>
    );
}

export default SearchFromSelection;