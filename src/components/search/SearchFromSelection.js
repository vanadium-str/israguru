import React, {useContext} from 'react';
import ErrorSearch from "../error/ErrorSearch";
import StartPage from "../StartPage";
import {IsraGuruContext} from "../../utils/сontext";
import {findByDate} from "../../utils/constants";
import ExcursionPage from "../start_page/ExcursionPage";

const SearchFromSelection = ({data}) => {
    const {level, city, startDate, endDate, language} = useContext(IsraGuruContext);
    let selectedByLanguage = data.filter(k=>k[1].language.includes(language));
    let selectedByDate = data.filter(k=>findByDate(k[1].date, startDate, endDate));//by date
    let selectedCity = city?data.filter(k=>k[1].city.includes(city)):0;//by City
    let selectedLevel = level?data.filter(k =>k[1].level.includes(level)):0;//by Level
    let selectedByCityAndLevel = selectedCity.length?selectedCity.filter(k=>k[1].level.includes(level)):0;//by city and level
    let selectedByCityLevelDate = selectedByCityAndLevel.length?selectedByCityAndLevel.filter(k=>findByDate(k[1].date, startDate, endDate)):0;//all options
    let selectedByCityAndDate = selectedCity.length?selectedCity.filter(k=>findByDate(k[1].date, startDate, endDate)):0;//by city and date
    let selectedByLevelAndDate = selectedLevel.length?selectedLevel.filter(k=>findByDate(k[1].date, startDate, endDate)):0;// by level and date
    
    //default
    if (city === '' && level === ''&& startDate.getTime() === endDate.getTime() && language==='') {
        console.log('1');
        return (
            <ExcursionPage data={data}/>
        );
    }
    //only date
    if(selectedByDate.length && !city && !level){
        console.log('2');
        return (
            <ExcursionPage data={language?selectedByDate.filter(k=>k[1].language.includes(language)):selectedByDate}/>
        );
    }
    //only level
    if (selectedLevel.length && !selectedByDate.length && !city) {
        console.log('3');
        return (
            <ExcursionPage data={language?selectedLevel.filter(k=>k[1].language.includes(language)):selectedLevel}/>
        );
    }
    //only city
    if (selectedCity.length && !level && !selectedByDate.length) {
        console.log('4');
        return (
            <ExcursionPage data={language?selectedCity.filter(k=>k[1].language.includes(language)):selectedCity}/>
        );
    }
    //if city and level are selected, but date isn't
    if(selectedByCityAndLevel.length && !selectedByDate.length){
        console.log('5');
        return (
            <ExcursionPage data={language?selectedByCityAndLevel.filter(k=>k[1].language.includes(language)):selectedByCityAndLevel}/>
        );
    }
    //if city and date are selected, but level isn't
    if(selectedByCityAndDate.length && !level){
        console.log('6');
        return (
            <ExcursionPage data={language?selectedByCityAndDate.filter(k=>k[1].language.includes(language)):selectedByCityAndDate}/>
        );
    }

    //if date and level are selected, but city isn't
    if(selectedByLevelAndDate.length && !city){
        console.log('7');
        return (
            <ExcursionPage data={language?selectedByLevelAndDate.filter(k=>k[1].language.includes(language)):selectedByLevelAndDate}/>
        );
    }

    //if all options are selected
    if(selectedByCityLevelDate.length){
        console.log('8');
        return (
            <ExcursionPage data={language?selectedByCityLevelDate.filter(k=>k[1].language.includes(language)):selectedByCityLevelDate}/>
        );
    }
    if(selectedByLanguage.length && !selectedByDate.length && !city && !level){
        console.log('9');
        return(
            <ExcursionPage data={selectedByLanguage}/>
            );
    }
    return (
        <ExcursionPage data={0}/>
    );
}

export default SearchFromSelection;