import React, {useContext} from 'react';
import ExcursionPage from "../start_page/ExcursionPage";
import {IsraGuruContext} from "../../utils/сontext";
import {findByDate} from "../../utils/constants";

const SearchFromSelection = ({data}) => {
    const {level, city, startDate, endDate, language} = useContext(IsraGuruContext);
    let selectedByLanguage = language?data.filter(k=>k[1].language.includes(language)):data;
    let selectedByDate = selectedByLanguage.filter(k=>findByDate(k[1].date, startDate, endDate)); //by date
    let selectedCity = selectedByLanguage.filter(k=>k[1].city.includes(city)); //by city
    let selectedLevel = selectedByLanguage.filter(k =>k[1].level.includes(level)); //by level
    let selectedByCityAndLevel = selectedCity.filter(k=>k[1].level.includes(level)); //by city and level
    let selectedByCityLevelDate = selectedByCityAndLevel.filter(k=>findByDate(k[1].date, startDate, endDate)); //all options
    let selectedByCityAndDate = selectedCity.filter(k=>findByDate(k[1].date, startDate, endDate)); //by city and date
    let selectedByLevelAndDate = selectedLevel.filter(k=>findByDate(k[1].date, startDate, endDate)); // by level and date

    //default
    if (city === '' && level === '' && startDate.getTime() === endDate.getTime()) {
        console.log('1');
        return (
            <ExcursionPage data={selectedByLanguage}/>
        );
    }

    //only date
    if(selectedByDate.length && !city && !level){
        console.log('2');
        return (
            <ExcursionPage data={selectedByDate}/>
        );
    }

    //only level
    if (selectedLevel.length && !selectedByDate.length && !city) {
        console.log('3');
        return (
            <ExcursionPage data={selectedLevel}/>
        );
    }

    //only city
    if (selectedCity.length && !level && !selectedByDate.length) {
        console.log('4');
        return (
            <ExcursionPage data={selectedCity}/>
        );
    }

    //if city and level are selected, but date isn't
    if(selectedByCityAndLevel.length && !selectedByDate.length){
        console.log('5');
        return (
            <ExcursionPage data={selectedByCityAndLevel}/>
        );
    }

    //if city and date are selected, but level isn't
    if(selectedByCityAndDate.length && !level){
        console.log('6');
        return (
            <ExcursionPage data={selectedByCityAndDate}/>
        );
    }

    //if date and level are selected, but city isn't
    if(selectedByLevelAndDate.length && !city){
        console.log('7');
        return (
            <ExcursionPage data={selectedByLevelAndDate}/>
        );
    }

    //if all options are selected
    if(selectedByCityLevelDate.length){
        console.log('8');
        return (
            <ExcursionPage data={selectedByCityLevelDate}/>
        );
    }

    return (
        <ExcursionPage data={0}/>
    );
}

export default SearchFromSelection;